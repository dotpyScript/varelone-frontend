import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/content/images";

type Props = {
  title: ReactNode;
  intro: ReactNode;
  image?: SiteImage;
  children?: ReactNode;
};

/** Hero for inner pages: shorter than the home hero, same art direction. */
export function PageHero({ title, intro, image, children }: Props) {
  return (
    <section className="on-dark relative isolate flex min-h-[72svh] items-end overflow-hidden bg-ink-950 text-white md:max-h-[760px] md:min-h-[560px]">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="hero-settle -z-10 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,15,13,0.94)_0%,rgba(11,15,13,0.55)_55%,rgba(11,15,13,0.45)_100%)]"
          />
        </>
      )}
      <div className="container-site pt-36 pb-14 md:pb-20">
        <h1
          className="hero-rise max-w-[20ch] text-h1"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        <p
          className="hero-rise mt-6 max-w-[54ch] text-lead text-white/80"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          {intro}
        </p>
        {children && (
          <div className="hero-rise mt-10" style={{ "--delay": "320ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
