import { ImageReveal } from "@/components/ui/image-reveal";
import { StatusTag } from "@/components/ui/status-tag";
import { images } from "@/content/images";

const chain = ["Energy", "Agriculture", "Cold storage", "Preservation"];

export function EnergyAgriculture() {
  return (
    <section aria-labelledby="agri-title" className="border-t border-line bg-paper-2 section-y">
      <div className="container-site">
        {/* The relationship, set as a typographic equation */}
        <p
          aria-hidden
          className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-display text-[clamp(1.4rem,0.9rem+2.4vw,3rem)] leading-tight font-semibold tracking-[-0.02em] [font-stretch:110%]"
          data-reveal
        >
          {chain.map((word, i) => (
            <span key={word} className="inline-flex items-baseline gap-4">
              <span className={i === 0 ? "text-ink-950" : "text-steel-400"}>{word}</span>
              <span className="text-signal">{i < chain.length - 1 ? "+" : "="}</span>
            </span>
          ))}
          <span className="text-signal">Productivity</span>
        </p>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
          <ImageReveal
            image={images.harvest}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="aspect-[4/3] md:col-span-7"
          />

          <div className="md:col-span-5 md:pt-4">
            <h2 id="agri-title" className="text-h2" data-reveal>
              Where energy meets the food economy.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-steel-500" data-reveal>
              <p>
                Too much of what farms produce is lost between harvest and market, often for lack of
                dependable power and cold storage.
              </p>
              <p>
                Our solar cold rooms, refrigeration and ice production already help keep produce
                fresh for longer. It is the part of the problem we work on today.
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-6" data-reveal>
              <StatusTag status="expansion" />
              <p className="mt-4 text-ink-800">
                As Varelon grows, we are exploring solar irrigation and water pumping, solar drying
                and solar-powered agro-processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
