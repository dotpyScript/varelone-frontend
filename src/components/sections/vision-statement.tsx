import { mission, vision } from "@/content/site";

export function VisionStatement({ showMission = false }: { showMission?: boolean }) {
  return (
    <section aria-labelledby="vision-title" className="on-dark bg-ink-950 section-y text-white">
      <div className="container-site">
        <h2 id="vision-title" className="text-label text-signal-bright" data-reveal>
          Our vision
        </h2>
        <div className="mt-10 md:mt-14" data-reveal>
          <p className="max-w-[30ch] font-display text-[clamp(1.9rem,1.1rem+3vw,4rem)] leading-[1.04] font-medium tracking-[-0.03em] [font-stretch:108%]">
            {vision}
          </p>
        </div>
        <p className="mt-10 max-w-[52ch] text-lg text-steel-300" data-reveal>
          It is an ambition, and we are building toward it one practical, working project at a time.
        </p>

        {showMission && (
          <div
            className="mt-20 grid gap-6 border-t border-line-dark pt-10 md:grid-cols-12"
            data-reveal
          >
            <h3 className="text-label text-steel-300 md:col-span-3">Our mission</h3>
            <p className="text-statement text-white/90 md:col-span-9">{mission}</p>
          </div>
        )}
      </div>
    </section>
  );
}
