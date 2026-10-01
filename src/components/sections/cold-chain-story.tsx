"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurProps, images } from "@/content/images";
import { coldChainFlow } from "@/content/solutions";
import { cn } from "@/lib/cn";

// Steps 0-1 are energy (signal green); from refrigeration onward the chain is cold (frost blue).
const COLD_FROM = 2;

const stepImages = [
  images.solarField,
  images.pylonsDay,
  images.refrigerationPlant,
  images.coldStorage,
  images.iceBlocks,
  images.logistics,
  images.produce,
];

export function ColdChainStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      // A thin band across the middle of the viewport decides the active step.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = coldChainFlow.length;
  const isCold = active >= COLD_FROM;

  return (
    <section aria-labelledby="cold-chain-title" className="on-dark bg-ink-950 section-y text-white">
      <div className="container-site">
        <div className="max-w-3xl" data-reveal>
          <p className="mb-6 text-label text-signal-bright">The cold chain</p>
          <h2 id="cold-chain-title" className="text-h1">
            More than a freezer. A working cold chain.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lead text-steel-300">
            Our cold-chain work connects energy, cooling, storage, ice and transport, so that
            perishable goods keep their value from source to market.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12">
          {/* Sticky visual, large screens only */}
          <div aria-hidden className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] max-h-[calc(100dvh-10rem)] w-full overflow-hidden bg-ink-800">
                {stepImages.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt=""
                    fill
                    sizes="(min-width: 1360px) 620px, 46vw"
                    {...blurProps(img)}
                    className={cn(
                      "object-cover transition-[opacity,transform] duration-1000 ease-[var(--ease-out-expo)]",
                      i === active ? "scale-100 opacity-100" : "scale-[1.05] opacity-0",
                    )}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(11,15,13,0.85),transparent)] p-6 pt-24">
                  <div className="flex items-end gap-5">
                    <span
                      className={cn(
                        "font-display text-6xl leading-none font-semibold tabular-nums transition-colors duration-500",
                        isCold ? "text-frost-bright" : "text-signal-bright",
                      )}
                    >
                      0{active + 1}
                    </span>
                    <div className="mb-1.5 flex-1">
                      <p className="text-label text-white">{coldChainFlow[active].title}</p>
                      <div className="mt-3 flex gap-1">
                        {coldChainFlow.map((s, i) => (
                          <span
                            key={s.title}
                            className={cn(
                              "h-0.5 flex-1 transition-colors duration-500",
                              i <= active
                                ? i >= COLD_FROM
                                  ? "bg-frost-bright"
                                  : "bg-signal-bright"
                                : "bg-white/20",
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="relative lg:col-span-5 lg:col-start-8">
            <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-line-dark" />
            {coldChainFlow.map((step, i) => {
              const reached = i <= active;
              const cold = i >= COLD_FROM;
              return (
                <li
                  key={step.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative pb-12 pl-12 last:pb-0 lg:flex lg:min-h-[40vh] lg:flex-col lg:justify-center lg:pb-0"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-2 left-0 size-[11px] border transition-colors duration-500 lg:top-1/2 lg:-translate-y-1/2",
                      reached
                        ? cold
                          ? "border-frost-bright bg-frost-bright"
                          : "border-signal-bright bg-signal-bright"
                        : "border-steel-400 bg-ink-950",
                    )}
                  />
                  <p className="text-label text-steel-400">
                    <span className="sr-only">Step </span>0{i + 1}
                    <span aria-hidden> / 0{total}</span>
                  </p>
                  <h3
                    className={cn(
                      "mt-3 text-h2 transition-colors duration-500",
                      reached ? "text-white" : "lg:text-white/35",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-4 max-w-[40ch] text-lg transition-colors duration-500",
                      reached ? "text-steel-300" : "text-steel-300 lg:text-steel-400/70",
                    )}
                  >
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
