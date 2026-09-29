export const requirementOptions = [
  "Solar cold room",
  "Solar refrigeration",
  "Solar ice block machine",
  "Cold-chain logistics",
  "Solar installation",
  "Camera installation",
  "Partnership or investment",
  "Other energy requirement",
] as const;

export type ContactPayload = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

/** Shared by the form (instant feedback) and the API route (source of truth). */
export function validateContact(input: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  const v = (k: keyof ContactPayload) => (input[k] ?? "").toString().trim();

  if (v("name").length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v("email"))) errors.email = "Please enter a valid email address.";
  if (v("phone") && !PHONE_RE.test(v("phone")))
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  if (!v("requirement")) errors.requirement = "Please choose what your enquiry is about.";
  if (v("message").length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  if (v("message").length > 4000)
    errors.message = "Please keep your message under 4,000 characters.";

  return errors;
}
