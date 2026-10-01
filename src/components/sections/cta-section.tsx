import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/content/site";

export function CTASection({
  title = "Have an energy or infrastructure challenge?",
  subtitle = "Let's build a practical solution around it.",
  as: Tag = "h2",
  showDetails = true,
}: {
  title?: string;
  subtitle?: string;
  as?: "h1" | "h2";
  /** Hide the email and phone where the page shows them in full elsewhere. */
  showDetails?: boolean;
}) {
  const { email, phone, phoneHref } = site.contact;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark border-t border-line-dark bg-ink-900 section-y text-white"
    >
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5" data-reveal>
          <Tag id="contact-title" className="text-h2">
            {title} <span className="text-steel-400">{subtitle}</span>
          </Tag>
          <p className="mt-8 max-w-[40ch] text-lg text-steel-300">
            Tell us what you need to power, cool or protect. We will come back to you to talk it
            through.
          </p>
          {showDetails && (
            <dl className="mt-10 space-y-4">
              <div>
                <dt className="text-sm text-steel-400">Telephone</dt>
                <dd>
                  <a href={phoneHref} className="text-lg text-white hover:underline">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-steel-400">Email</dt>
                <dd>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg wrap-anywhere text-white hover:underline"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          )}
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
