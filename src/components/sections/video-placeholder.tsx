"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { toast } from "sonner";
import { blurProps, type SiteImage } from "@/content/images";

type Props = {
  poster: SiteImage;
  title: string;
  caption?: string;
  /**
   * Drop in the company film here (e.g. "/video/varelon.mp4") and the
   * placeholder becomes a real player. Until then the play button explains
   * that the film is on its way instead of doing nothing.
   */
  videoSrc?: string;
};

export function VideoPlaceholder({ poster, title, caption, videoSrc }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onPlay = () => {
    if (!videoSrc) {
      toast("Company film coming soon", {
        description: "Our Varelon film is in production. Check back shortly.",
      });
      return;
    }
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section aria-label={title} className="on-dark bg-ink-950 pb-[clamp(5rem,3rem+7vw,10rem)]">
      <div className="container-site">
        <figure>
          <div
            className="relative aspect-[4/5] overflow-hidden bg-ink-800 sm:aspect-video"
            data-reveal="image"
          >
            {playing && videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                playsInline
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  sizes="(min-width: 1360px) 1264px, 100vw"
                  {...blurProps(poster)}
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-ink-950/35" />
                <button
                  type="button"
                  onClick={onPlay}
                  className="group absolute inset-0 flex items-center justify-center text-white"
                  aria-label={`Play video: ${title}`}
                >
                  <span className="flex size-20 items-center justify-center rounded-full border border-white/70 bg-ink-950/30 backdrop-blur-[2px] transition-[background-color,border-color,transform] duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-ink-950 md:size-24">
                    <Play aria-hidden className="ml-1 size-7 fill-current" strokeWidth={1.5} />
                  </span>
                </button>
              </>
            )}
          </div>
          <figcaption className="mt-6 flex flex-col gap-2 text-steel-300 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-h3 text-white">{title}</span>
            {caption && <span className="max-w-[48ch] sm:text-right">{caption}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
