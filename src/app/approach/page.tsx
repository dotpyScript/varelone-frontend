import type { Metadata } from "next";
import { BusinessModel } from "@/components/sections/business-model";
import { CTASection } from "@/components/sections/cta-section";
import { HowWeWork } from "@/components/sections/how-we-work";
import { PageHero } from "@/components/sections/page-hero";
import { approachPillars } from "@/content/future";
import { images } from "@/content/images";
import { approachStatement } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Varelon Energy works: understanding the operating problem, designing around it, delivering the infrastructure and supporting it after handover.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        image={images.solarInstall}
        title="Every solution starts with the problem it has to solve."
        intro={approachStatement}
      />

      <HowWeWork showLink={false} />

      <BusinessModel />

      <section aria-labelledby="pillars-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 id="pillars-title" className="text-h2">
              What we bring together
            </h2>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {approachPillars.map((p) => (
              <div key={p.title} className="border-t border-line py-7" data-reveal>
                <dt className="text-h3">{p.title}</dt>
                <dd className="mt-3 text-steel-500">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
