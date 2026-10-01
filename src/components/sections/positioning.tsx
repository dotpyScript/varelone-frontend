import { audiences } from "@/content/site";

export function Positioning() {
  return (
    <section aria-labelledby="positioning-title" className="section-y">
      <div className="container-site">
        <h2 id="positioning-title" className="sr-only">
          What Varelon does
        </h2>
        <p className="max-w-[28ch] text-statement text-ink-900 md:max-w-[34ch]" data-reveal>
          Varelon Energy is an integrated energy company developing reliable, affordable and
          sustainable energy solutions{" "}
          <span className="text-steel-400">
            that help organisations reduce energy costs, keep operations running and move toward
            cleaner power.
          </span>
        </p>

        <div
          className="mt-16 grid gap-6 border-t border-line pt-8 md:mt-24 md:grid-cols-12"
          data-reveal
        >
          <h3 className="text-sm font-medium text-steel-500 md:col-span-3">Who we work with</h3>
          <ul className="flex flex-wrap gap-x-2 gap-y-3 md:col-span-9">
            {audiences.map((a) => (
              <li key={a} className="border border-line px-3.5 py-1.5 text-[0.95rem] text-ink-800">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
