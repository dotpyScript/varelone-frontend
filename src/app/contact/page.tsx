import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/contact-details";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Varelon Energy about your energy, cold-chain or infrastructure requirement, or contact our head office in Asokoro, Abuja by phone or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-ink-900 pt-16">
      <CTASection as="h1" showDetails={false} />
      <ContactDetails />
    </div>
  );
}
