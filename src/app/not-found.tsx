import { ButtonLink } from "@/components/ui/button";
import { ctaLabels } from "@/content/site";

export default function NotFound() {
  return (
    <section className="on-dark flex min-h-[80svh] items-end bg-ink-950 text-white">
      <div className="container-site pt-36 pb-20">
        <p className="text-label text-signal-bright">404</p>
        <h1 className="mt-6 max-w-[18ch] text-h1">This page is not on the grid.</h1>
        <p className="mt-6 max-w-[48ch] text-lead text-steel-300">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/solutions" variant="outline-light">
            {ctaLabels.solutions}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
