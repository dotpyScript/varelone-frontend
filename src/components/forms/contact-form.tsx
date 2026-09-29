"use client";

import { useMutation } from "@tanstack/react-query";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { apiErrorMessage, submitContact } from "@/lib/api";
import {
  requirementOptions,
  validateContact,
  type ContactErrors,
  type ContactPayload,
} from "@/lib/contact";
import { cn } from "@/lib/cn";

const empty: ContactPayload = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  requirement: "",
  message: "",
};

const control =
  "block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-lg text-white transition-colors duration-200 placeholder:text-steel-400 focus:outline-none focus-visible:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);
  const formId = useId();

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      setSent(true);
      setValues(empty);
      toast.success("Enquiry sent", {
        description: "Thank you. The Varelon team will be in touch.",
      });
    },
    onError: (error) => {
      toast.error("Your enquiry was not sent", {
        description: apiErrorMessage(error, "Something went wrong. Please try again."),
      });
    },
  });

  const set = (key: keyof ContactPayload) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus();
      return;
    }
    const honeypot = new FormData(e.currentTarget).get("company_website");
    mutation.mutate({
      ...values,
      ...(honeypot ? { company_website: honeypot } : {}),
    } as ContactPayload);
  };

  if (sent) {
    return (
      <div role="status" className="border-t border-line-dark pt-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-signal text-white">
          <Check aria-hidden className="size-6" />
        </span>
        <h3 className="mt-8 text-h2 text-white">Thank you. We have your enquiry.</h3>
        <p className="mt-4 max-w-[46ch] text-lg text-steel-300">
          A member of the Varelon team will review your requirement and get back to you.
        </p>
        <Button
          type="button"
          variant="outline-light"
          onClick={() => setSent(false)}
          className="mt-8"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  const requiredKeys: Array<keyof ContactPayload> = ["name", "email", "requirement", "message"];
  const field = (key: keyof ContactPayload) => ({
    "aria-required": requiredKeys.includes(key) ? true : undefined,
    id: `${formId}-${key}`,
    name: key,
    value: values[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${formId}-${key}-error` : undefined,
    className: cn(
      control,
      errors[key]
        ? "border-red-400"
        : "border-white/30 hover:border-white/60 focus:border-signal-bright",
    ),
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-x-8 gap-y-9 sm:grid-cols-2"
      aria-label="Project enquiry"
    >
      <Field
        label="Name"
        htmlFor={`${formId}-name`}
        error={errors.name}
        errorId={`${formId}-name-error`}
        required
      >
        <input
          {...field("name")}
          type="text"
          autoComplete="name"
          onChange={(e) => set("name")(e.target.value)}
        />
      </Field>

      <Field label="Organisation" htmlFor={`${formId}-organization`} hint="Optional">
        <input
          {...field("organization")}
          type="text"
          autoComplete="organization"
          onChange={(e) => set("organization")(e.target.value)}
        />
      </Field>

      <Field
        label="Email"
        htmlFor={`${formId}-email`}
        error={errors.email}
        errorId={`${formId}-email-error`}
        required
      >
        <input
          {...field("email")}
          type="email"
          inputMode="email"
          autoComplete="email"
          onChange={(e) => set("email")(e.target.value)}
        />
      </Field>

      <Field
        label="Phone"
        htmlFor={`${formId}-phone`}
        hint="Optional"
        error={errors.phone}
        errorId={`${formId}-phone-error`}
      >
        <input
          {...field("phone")}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          onChange={(e) => set("phone")(e.target.value)}
        />
      </Field>

      <Field
        label="Project or requirement"
        htmlFor={`${formId}-requirement`}
        error={errors.requirement}
        errorId={`${formId}-requirement-error`}
        required
        className="sm:col-span-2"
      >
        <select
          {...field("requirement")}
          onChange={(e) => set("requirement")(e.target.value)}
          className={cn(
            field("requirement").className,
            "cursor-pointer appearance-none bg-[length:12px] bg-[right_0.25rem_center] bg-no-repeat pr-8",
            !values.requirement && "text-steel-400",
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23b3bab5' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled className="bg-ink-900">
            Choose one
          </option>
          {requirementOptions.map((o) => (
            <option key={o} value={o} className="bg-ink-900 text-white">
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message"
        htmlFor={`${formId}-message`}
        error={errors.message}
        errorId={`${formId}-message-error`}
        required
        className="sm:col-span-2"
      >
        <textarea
          {...field("message")}
          rows={4}
          onChange={(e) => set("message")(e.target.value)}
          className={cn(field("message").className, "resize-y")}
        />
      </Field>

      {/* Honeypot for bots: hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel-300">Required fields are marked with an asterisk (*).</p>
        <Button
          type="submit"
          icon="arrow"
          loading={mutation.isPending}
          disabled={mutation.isPending}
          className="self-start sm:self-auto"
        >
          {mutation.isPending ? "Sending" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  errorId,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  errorId?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between text-sm text-steel-300"
      >
        <span>
          {label}
          {required && (
            <span aria-hidden className="text-signal-bright">
              {" "}
              *
            </span>
          )}
        </span>
        {hint && <span className="text-steel-400">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
