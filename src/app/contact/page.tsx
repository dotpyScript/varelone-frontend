import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Varelon Energy about your energy, cold-chain or infrastructure requirement. We will get back to you to talk it through.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-ink-900 pt-16">
      <CTASection as="h1" />
    </div>
  );
}
