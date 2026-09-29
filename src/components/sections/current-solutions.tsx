import { SectionHeading } from "@/components/ui/section-heading";
import { StatusTag } from "@/components/ui/status-tag";
import { coldChainSolutions, infrastructureSolutions } from "@/content/solutions";
import { InfrastructureCard } from "./infrastructure-card";
import { SolutionsExplorer } from "./solutions-explorer";

export function CurrentSolutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="border-t border-line bg-white section-y"
    >
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title={<span id="solutions-title">Solutions for real energy challenges.</span>}
            intro="What Varelon provides today: solar-powered cold-chain infrastructure, solar installation, and camera installation for the facilities around them."
          />
          <StatusTag status="current" className="md:mb-2" />
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex items-center gap-4" data-reveal>
            <h3 className="shrink-0 text-label text-ink-900">Cold chain infrastructure</h3>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
          <SolutionsExplorer solutions={coldChainSolutions} />
        </div>

        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex items-center gap-4" data-reveal>
            <h3 className="shrink-0 text-label text-ink-900">Energy &amp; infrastructure</h3>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
          <div className="grid gap-14 md:grid-cols-2 md:gap-10">
            {infrastructureSolutions.map((s) => (
              <InfrastructureCard key={s.slug} solution={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
