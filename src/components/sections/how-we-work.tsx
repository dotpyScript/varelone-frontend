import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/future";

export function HowWeWork({ showLink = true }: { showLink?: boolean }) {
  return (
    <section aria-labelledby="process-title" className="section-y">
      <div className="container-site">
        <SectionHeading
          title={
            <span id="process-title">From an operating problem to working infrastructure.</span>
          }
          intro="Every project follows the same disciplined path, whether it is a single cold room or a site-wide installation."
        />

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="border-t border-ink-900 pt-6"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="font-display text-5xl font-semibold text-signal [font-stretch:110%] tabular-nums">
                0{i + 1}
              </span>
              <h3 className="mt-8 text-h3">{step.title}</h3>
              <p className="mt-3 text-steel-500">{step.body}</p>
            </li>
          ))}
        </ol>

        {showLink && (
          <div className="mt-14" data-reveal>
            <ButtonLink href="/approach" variant="outline">
              See our approach
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
