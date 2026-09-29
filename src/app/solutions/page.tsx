import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ImageReveal } from "@/components/ui/image-reveal";
import { StatusTag } from "@/components/ui/status-tag";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { futureAreas } from "@/content/future";
import { images } from "@/content/images";
import { coldChainSolutions, infrastructureSolutions, type Solution } from "@/content/solutions";
import { ctaLabels } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions: Solar Cold Rooms, Refrigeration, Ice & Cold-Chain Logistics",
  description:
    "Solar cold rooms, solar refrigeration, solar ice block machines, cold-chain logistics, solar installation and camera installation from Varelon Energy in Nigeria.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        image={images.refrigerationPlant}
        title="Solutions built around real operating needs."
        intro="Today Varelon provides solar-powered cold-chain infrastructure, solar installation and camera installation. Each is designed around the site, the load and the realities of working without reliable grid power."
      >
        <ButtonLink href="/contact" variant="outline-light">
          {ctaLabels.contact}
        </ButtonLink>
      </PageHero>

      {/* Current: cold chain */}
      <section aria-labelledby="cold-chain-title" className="section-y">
        <div className="container-site">
          <div
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            data-reveal
          >
            <div className="max-w-3xl">
              <h2 id="cold-chain-title" className="text-h2">
                Cold chain infrastructure
              </h2>
              <p className="mt-6 text-lead text-steel-500">
                Four connected services that keep perishable goods at temperature, from the moment
                they are produced to the moment they reach market.
              </p>
            </div>
            <StatusTag status="current" className="md:mb-2" />
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-20 md:mt-20 md:grid-cols-2">
            {coldChainSolutions.map((s, i) => (
              <SolutionDetail key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Current: energy & infrastructure */}
      <section
        aria-labelledby="infrastructure-title"
        className="border-t border-line bg-white section-y"
      >
        <div className="container-site">
          <div
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            data-reveal
          >
            <div className="max-w-3xl">
              <h2 id="infrastructure-title" className="text-h2">
                Energy &amp; infrastructure
              </h2>
              <p className="mt-6 text-lead text-steel-500">
                Solar power for the sites that need it, and camera systems for the facilities we
                work around.
              </p>
            </div>
            <StatusTag status="current" className="md:mb-2" />
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-20 md:mt-20 md:grid-cols-2">
            {infrastructureSolutions.map((s, i) => (
              <SolutionDetail key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Future: visually separated */}
      <section
        aria-labelledby="expanding-title"
        className="on-dark bg-ink-950 section-y text-white"
      >
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-12" data-reveal>
            <div className="md:col-span-7">
              <StatusTag status="expansion" tone="dark" />
              <h2 id="expanding-title" className="mt-6 text-h2">
                Expanding energy capabilities
              </h2>
            </div>
            <p className="text-lead text-steel-300 md:col-span-5 md:self-end">
              The areas below are part of Varelon&apos;s long-term strategy. They are not services
              we offer today, and we will say so clearly until that changes.
            </p>
          </div>

          <ul className="mt-14 grid border-t border-l border-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {futureAreas.map((a) => (
              <li key={a.slug} className="border-r border-b border-line-dark">
                <Link
                  href={`/future-energy#${a.slug}`}
                  className="group flex h-full min-h-44 flex-col justify-between gap-8 p-6 transition-colors hover:bg-ink-900"
                >
                  <span className="text-h3">{a.title}</span>
                  <span className="flex items-center justify-between text-sm text-steel-300">
                    Our direction
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-r border-b border-line-dark p-6 sm:col-span-2 lg:col-span-1">
              <p className="text-steel-300">
                Interested in partnering on one of these areas?{" "}
                <Link
                  href="/contact"
                  className="text-white underline underline-offset-4 hover:text-signal-bright"
                >
                  Talk to us
                </Link>
                .
              </p>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function SolutionDetail({ solution, index }: { solution: Solution; index: number }) {
  return (
    <article id={solution.slug} aria-labelledby={`${solution.slug}-title`} className="scroll-mt-24">
      <ImageReveal
        image={solution.image}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[3/2]"
      />
      <div className="mt-7 flex items-baseline gap-4" data-reveal>
        <span className="text-label text-steel-400">0{index + 1}</span>
        <h3 id={`${solution.slug}-title`} className="text-h2">
          {solution.title}
        </h3>
      </div>
      <p className="mt-4 max-w-[52ch] text-lg text-steel-500" data-reveal>
        {solution.summary}
      </p>
      <DetailLists solution={solution} className="mt-8" />
    </article>
  );
}

function DetailLists({ solution, className }: { solution: Solution; className?: string }) {
  return (
    <div
      className={`grid gap-8 border-t border-line pt-6 sm:grid-cols-2 ${className ?? ""}`}
      data-reveal
    >
      <div>
        <h4 className="text-sm font-medium text-ink-900">Challenges it addresses</h4>
        <ul className="mt-3 space-y-2 text-steel-500">
          {solution.problems.map((p) => (
            <li key={p} className="flex gap-3">
              <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium text-ink-900">Where it is used</h4>
        <ul className="mt-3 space-y-2 text-steel-500">
          {solution.applications.map((a) => (
            <li key={a} className="flex gap-3">
              <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-steel-400" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
