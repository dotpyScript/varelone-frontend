"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { StatusTag, type Status } from "@/components/ui/status-tag";
import { businessModel } from "@/content/future";
import { cn } from "@/lib/cn";

const horizonStatus: Record<(typeof businessModel)[number]["horizon"], Status> = {
  now: "current",
  growing: "growing",
  "long-term": "long-term",
};

/**
 * The six stages of Varelon's intended business model as a segmented
 * lifecycle bar. Each stage carries an honest status so the model reads as
 * intent, not as a list of things already delivered.
 */
export function BusinessModel() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();
  const stage = businessModel[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = businessModel.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section aria-labelledby="model-title" className="border-t border-line bg-white section-y">
      <div className="container-site">
        <div className="max-w-3xl" data-reveal>
          <h2 id="model-title" className="text-h2">
            Built to take part across the whole project lifecycle.
          </h2>
          <p className="mt-6 max-w-[60ch] text-lead text-steel-500">
            Our model combines project development, engineering and installation, consulting,
            operations and maintenance, energy-as-a-service, partnerships, infrastructure investment
            and project ownership. Some stages are active today; others are part of how we intend to
            grow.
          </p>
        </div>

        <div className="mt-14 md:mt-20" data-reveal>
          <div
            role="tablist"
            aria-label="Business model stages"
            className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-6"
          >
            {businessModel.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.key}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`${id}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "relative flex min-h-24 flex-col justify-between gap-6 border-r border-b border-line p-5 text-left transition-colors duration-300 md:min-h-32",
                    selected ? "bg-ink-950 text-white" : "bg-white text-ink-900 hover:bg-paper",
                  )}
                >
                  <span
                    className={cn("text-label", selected ? "text-signal-bright" : "text-steel-400")}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-h3">{s.title}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${active}`}
            className="grid gap-6 border-x border-b border-line p-6 md:grid-cols-12 md:p-10"
          >
            <div className="md:col-span-3">
              <StatusTag status={horizonStatus[stage.horizon]} />
            </div>
            <p className="text-statement md:col-span-9">{stage.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
