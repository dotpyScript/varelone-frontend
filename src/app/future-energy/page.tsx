import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageReveal } from "@/components/ui/image-reveal";
import { StatusTag } from "@/components/ui/status-tag";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { futureAreas } from "@/content/future";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Future Energy: Our Long-Term Direction",
  description:
    "Varelon Energy's long-term strategy: building an integrated energy group, expanding from solar cold-chain infrastructure toward renewable energy, power generation, storage, energy infrastructure, efficiency, agriculture, clean mobility, and oil and gas.",
  alternates: { canonical: "/future-energy" },
};

export default function FutureEnergyPage() {
  return (
    <>
      <PageHero
        image={images.pylons}
        title="Where Varelon is heading."
        intro="As Varelon grows, we are expanding our capabilities across renewable energy, power generation, energy storage, energy infrastructure, energy efficiency, clean transportation, oil and gas, and emerging energy technologies."
      />

      {/* Today vs tomorrow, stated plainly */}
      <section aria-labelledby="today-title" className="border-b border-line bg-white">
        <div className="container-site grid md:grid-cols-2">
          <div
            className="border-b border-line py-12 md:border-r md:border-b-0 md:py-16 md:pr-12"
            data-reveal
          >
            <StatusTag status="current" />
            <h2 id="today-title" className="mt-5 text-h3">
              What we offer today
            </h2>
            <p className="mt-3 max-w-[46ch] text-steel-500">
              Solar cold rooms, solar refrigeration, solar ice block machines, cold-chain logistics,
              solar installation and camera installation.
            </p>
            <Link
              href="/solutions"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 font-medium text-signal hover:text-signal-deep"
            >
              See current solutions
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="py-12 md:py-16 md:pl-12" data-reveal>
            <StatusTag status="expansion" />
            <h2 className="mt-5 text-h3">What we are building toward</h2>
            <p className="mt-3 max-w-[46ch] text-steel-500">
              An integrated energy group able to work across multiple segments of the energy
              industry, with a strong focus on renewable energy, energy access, energy efficiency,
              energy infrastructure and cleaner energy systems.
            </p>
            <p className="mt-3 max-w-[46ch] text-steel-500">
              The areas below describe that strategy and intent, not services currently available.
              We will update this page as capabilities become available.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Expansion areas" className="section-y">
        <div className="container-site">
          <ol className="border-t border-ink-900">
            {futureAreas.map((area, i) => (
              <li
                key={area.slug}
                id={area.slug}
                className="grid scroll-mt-24 gap-8 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <div className="md:col-span-4" data-reveal>
                  <span className="text-label text-steel-400">0{i + 1}</span>
                  <h2 className="mt-4 text-h2">{area.title}</h2>
                  <StatusTag status="expansion" className="mt-5" />
                </div>
                <div className={area.image ? "md:col-span-4" : "md:col-span-7"} data-reveal>
                  <p className="text-lg text-ink-800">{area.line}</p>
                  <h3 className="mt-8 text-sm font-medium text-ink-900">Areas we are exploring</h3>
                  <ul className="mt-3 space-y-2 text-steel-500">
                    {area.scope.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-steel-400" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                {area.image && (
                  <ImageReveal
                    image={area.image}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[4/3] md:col-span-4"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Want to build this future with us?"
        subtitle="We are open to conversations with partners, investors and project developers."
      />
    </>
  );
}
