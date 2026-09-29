import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ImageReveal } from "@/components/ui/image-reveal";
import { StatusTag } from "@/components/ui/status-tag";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { VisionStatement } from "@/components/sections/vision-statement";
import { images } from "@/content/images";
import { currentSolutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "About Varelon Energy",
  description:
    "Varelon Energy NG LTD is building an integrated energy and infrastructure business in Nigeria, starting with solar-powered cold-chain solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={images.engineering}
        title="A practical starting point. A larger ambition."
        intro="Varelon Energy NG LTD is building an integrated energy and infrastructure business focused on reliable, affordable and sustainable solutions."
      />

      {/* Who we are */}
      <section aria-labelledby="who-title" className="section-y">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <h2 id="who-title" className="text-h2 md:col-span-4" data-reveal>
            Who we are
          </h2>
          <div className="space-y-6 md:col-span-7 md:col-start-6" data-reveal>
            <p className="text-statement">
              We are an emerging Nigerian energy company solving practical energy problems through
              technology, engineering and sustainable infrastructure.
            </p>
            <p className="text-lg text-steel-500">
              Our work begins where unreliable power costs businesses the most: keeping products
              cold, preserved and moving. We combine solar energy with refrigeration, storage, ice
              production and logistics. We also install solar power systems for businesses and
              facilities, and the cameras that help protect the sites around them. We do not sell
              products: every solution is designed, installed and supported as a service.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section aria-labelledby="what-title" className="border-t border-line bg-white section-y">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4" data-reveal>
            <h2 id="what-title" className="text-h2">
              What we do today
            </h2>
            <StatusTag status="current" className="mt-6" />
          </div>
          <ul className="border-t border-line md:col-span-8">
            {currentSolutions.map((s) => (
              <li key={s.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/solutions#${s.slug}`}
                  className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="text-h3 transition-colors group-hover:text-signal">
                    {s.title}
                  </span>
                  <span className="flex items-center gap-3 text-steel-500">
                    {s.short}
                    <ArrowRight
                      aria-hidden
                      className="hidden size-4 shrink-0 transition-transform group-hover:translate-x-1 sm:block"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work + where we're going */}
      <section aria-labelledby="going-title" className="section-y">
        <div className="container-site grid gap-12 md:grid-cols-12 md:gap-10">
          <ImageReveal
            image={images.pylons}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] md:col-span-6 md:aspect-auto md:min-h-[520px]"
          />
          <div className="flex flex-col justify-center gap-14 md:col-span-5 md:col-start-8">
            <div data-reveal>
              <h2 className="text-h3">How we work</h2>
              <p className="mt-4 text-lg text-steel-500">
                We bring together engineering expertise, technology, project development, energy
                services and strategic partnerships, so each solution is designed around what the
                customer actually needs rather than around a product.
              </p>
              <ButtonLink href="/approach" variant="text" className="mt-2">
                Our approach
              </ButtonLink>
            </div>
            <div data-reveal>
              <h2 id="going-title" className="text-h3">
                Where we&apos;re going
              </h2>
              <p className="mt-4 text-lg text-steel-500">
                Over time, we intend to work across more of the energy value chain: renewable
                energy, storage, power infrastructure, efficiency, agriculture and clean mobility.
                These are areas of expansion, and we present them that way.
              </p>
              <ButtonLink href="/future-energy" variant="text" className="mt-2">
                Future energy
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <VisionStatement showMission />
      <CTASection />
    </>
  );
}
