import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Solution } from "@/content/solutions";

/**
 * Image-led service card. On hover-capable devices the photo zooms slightly
 * and the write-up unfolds beneath it, line by line; the whole card links to
 * the service's detail on /solutions. On touch devices the write-up is always
 * visible, and keyboard focus triggers the same reveal as hover.
 */
export function InfrastructureCard({ solution }: { solution: Solution }) {
  const reveal =
    "transition-[opacity,translate] duration-500 ease-[var(--ease-out-expo)] can-hover:translate-y-3 can-hover:opacity-0 can-hover:group-hover:translate-y-0 can-hover:group-hover:opacity-100 can-hover:group-focus-visible:translate-y-0 can-hover:group-focus-visible:opacity-100";

  return (
    <Link
      href={`/solutions#${solution.slug}`}
      aria-label={`${solution.title}: view service details`}
      className="group block focus-visible:outline-offset-8"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-800" data-reveal="image">
        <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05] group-focus-visible:scale-[1.05]">
          <Image
            src={solution.image.src}
            alt={solution.image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/15"
        />
        <span
          aria-hidden
          className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-ink-950 transition-[opacity,scale] duration-500 ease-[var(--ease-out-expo)] can-hover:scale-75 can-hover:opacity-0 can-hover:group-hover:scale-100 can-hover:group-hover:opacity-100 can-hover:group-focus-visible:scale-100 can-hover:group-focus-visible:opacity-100"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      {/* Title always shows; the rest unfolds on hover. */}
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h4 className="text-h2 transition-colors duration-300 group-hover:text-signal">
          {solution.title}
        </h4>
      </div>

      <div className="grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)] can-hover:grid-rows-[0fr] can-hover:group-hover:grid-rows-[1fr] can-hover:group-focus-visible:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className={`mt-4 max-w-[52ch] text-lg text-steel-500 ${reveal} delay-75`}>
            {solution.summary}
          </p>
          <ul className={`mt-5 flex flex-wrap gap-2 ${reveal} delay-150`}>
            {solution.applications.map((a) => (
              <li key={a} className="border border-line px-3 py-1 text-[0.85rem] text-ink-800">
                {a}
              </li>
            ))}
          </ul>
          <span
            className={`mt-6 mb-1 inline-flex min-h-11 items-center gap-2 font-medium text-signal ${reveal} delay-200`}
          >
            View service details
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
