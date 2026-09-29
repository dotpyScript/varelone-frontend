"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/content/solutions";
import { cn } from "@/lib/cn";

/**
 * Tabbed explorer for the cold-chain offerings. On large screens a list of
 * services drives one large image panel; below `lg` each service stacks with
 * its own image so nothing is hidden behind interaction on touch devices.
 */
export function SolutionsExplorer({ solutions }: { solutions: Solution[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const current = solutions[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = solutions.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <>
      {/* Desktop: tabs + panel */}
      <div className="hidden gap-10 lg:grid lg:grid-cols-12">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Cold chain solutions"
          className="col-span-5 border-t border-line"
        >
          {solutions.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "group relative flex w-full items-baseline gap-6 border-b border-line py-7 text-left transition-colors duration-300",
                  selected ? "text-ink-950" : "text-steel-400 hover:text-ink-800",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-[-1px] left-0 h-0.5 bg-signal transition-[width] duration-500 ease-[var(--ease-out-expo)]",
                    selected ? "w-full" : "w-0",
                  )}
                />
                <span className="w-8 shrink-0 text-label">0{i + 1}</span>
                <span className="flex-1">
                  <span className="block text-h3">{s.title}</span>
                  <span
                    className={cn(
                      "mt-2 block text-[0.95rem] transition-opacity duration-300",
                      selected ? "text-steel-500 opacity-100" : "opacity-0",
                    )}
                  >
                    {s.short}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="col-span-7"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
            {solutions.map((s, i) => (
              <Image
                key={s.slug}
                src={s.image.src}
                alt={i === active ? s.image.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="(min-width: 1360px) 760px, 58vw"
                className={cn(
                  "object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)]",
                  i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-7 gap-8">
            <p className="col-span-4 text-lg text-ink-800">{current.summary}</p>
            <div className="col-span-3">
              <p className="text-label text-steel-500">Used by</p>
              <ul className="mt-4 space-y-1.5 text-[0.95rem] text-ink-800">
                {current.applications.slice(0, 3).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <Link
                href={`/solutions#${current.slug}`}
                className="group mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-signal hover:text-signal-deep"
              >
                {current.title} in detail
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and tablet: stacked */}
      <ol className="grid gap-14 sm:grid-cols-2 sm:gap-x-6 lg:hidden">
        {solutions.map((s, i) => (
          <li key={s.slug} data-reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline gap-4">
              <span className="text-label text-steel-500">0{i + 1}</span>
              <h4 className="text-h3">{s.title}</h4>
            </div>
            <p className="mt-3 text-steel-500">{s.summary}</p>
            <Link
              href={`/solutions#${s.slug}`}
              className="mt-3 inline-flex min-h-11 items-center gap-2 font-medium text-signal"
            >
              Learn more <span className="sr-only">about {s.title}</span>
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
