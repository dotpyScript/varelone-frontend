import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { StatusTag } from "@/components/ui/status-tag";
import { futureAreas } from "@/content/future";

export function BeyondToday() {
  return (
    <section aria-labelledby="future-title" className="section-y">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <StatusTag status="expansion" />
            <h2 id="future-title" className="mt-6 text-h2">
              Building toward a broader energy future.
            </h2>
            <p className="mt-6 text-lg text-steel-500">
              Cold chain is where we start. Over time, Varelon intends to work across more of the
              energy value chain. These are areas of expansion, not services we offer today.
            </p>
            <ButtonLink href="/future-energy" variant="outline" className="mt-10">
              Our long-term direction
            </ButtonLink>
          </div>
        </div>

        <ol className="border-t border-line lg:col-span-8">
          {futureAreas.map((area, i) => (
            <li key={area.slug} className="border-b border-line" data-reveal>
              <Link
                href={`/future-energy#${area.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-7 transition-colors md:grid-cols-[3.5rem_1fr_auto] md:py-8"
              >
                <span className="text-label text-steel-400">0{i + 1}</span>
                <span>
                  <span className="block text-h3 transition-colors group-hover:text-signal">
                    {area.title}
                  </span>
                  <span className="mt-2 block max-w-[56ch] text-steel-500">{area.line}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-5 text-steel-400 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
