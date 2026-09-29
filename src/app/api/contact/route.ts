import { validateContact, type ContactPayload } from "@/lib/contact";

/**
 * Receives project enquiries.
 *
 * Delivery: set CONTACT_WEBHOOK_URL (e.g. a Zapier/Make/Slack/CRM webhook, or
 * your own mail service endpoint) and every valid enquiry is forwarded to it
 * as JSON. In development without a webhook, enquiries are logged to the
 * server console. In production without a webhook the route returns 503, so
 * enquiries are never silently dropped.
 */
export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if ((body as Record<string, unknown>).company_website) {
    return Response.json({ ok: true });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { message: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const enquiry = {
    name: String(body.name).trim(),
    organization: String(body.organization ?? "").trim(),
    email: String(body.email).trim(),
    phone: String(body.phone ?? "").trim(),
    requirement: String(body.requirement).trim(),
    message: String(body.message).trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] CONTACT_WEBHOOK_URL is not configured; enquiry not delivered.");
      return Response.json(
        { message: "Our enquiry form is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }
    console.info("[contact] New enquiry (dev, no webhook configured):", enquiry);
    return Response.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[contact] Delivery failed:", err);
    return Response.json(
      { message: "We could not send your enquiry just now. Please try again shortly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
