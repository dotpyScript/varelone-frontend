import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { blurProps, images } from "@/content/images";
import { ctaLabels } from "@/content/site";

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-950 text-white md:max-h-[980px]">
      <Image
        src={images.hero.src}
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        {...blurProps(images.hero)}
        className="hero-settle -z-10 object-cover object-[60%_center]"
      />
      {/* Legibility scrim: darkest where the text sits, bottom-left. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,15,13,0.92)_0%,rgba(11,15,13,0.55)_45%,rgba(11,15,13,0.25)_100%)] md:bg-[linear-gradient(to_top_right,rgba(11,15,13,0.94)_0%,rgba(11,15,13,0.6)_45%,rgba(11,15,13,0.1)_100%)]"
      />

      {/* Top scrim keeps the navigation legible over any photograph. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(to_bottom,rgba(11,15,13,0.6),transparent)]"
      />

      <div className="container-site pt-32 pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-[68rem]">
          <h1
            className="hero-rise text-display"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            Reliable energy for the work that cannot stop.
          </h1>
          <p
            className="hero-rise mt-7 max-w-[46ch] text-lead text-white/80"
            style={{ "--delay": "260ms" } as React.CSSProperties}
          >
            Varelon Energy designs and delivers solar-powered cold-chain and infrastructure
            solutions for businesses, producers and institutions across Nigeria.
          </p>
          <div
            className="hero-rise mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
            style={{ "--delay": "400ms" } as React.CSSProperties}
          >
            <ButtonLink href="/solutions">{ctaLabels.solutions}</ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              {ctaLabels.contact}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
