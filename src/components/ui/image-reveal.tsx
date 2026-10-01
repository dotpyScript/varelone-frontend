import Image from "next/image";
import { blurProps, type SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  image: SiteImage;
  sizes: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  /** Set false for images that sit above the fold or inside interactive panels. */
  reveal?: boolean;
};

/** Photograph in a fixed-ratio frame that unmasks upward as it enters the viewport. */
export function ImageReveal({
  image,
  sizes,
  className,
  imgClassName,
  preload,
  reveal = true,
}: Props) {
  return (
    <div
      className={cn("relative overflow-hidden bg-ink-800", className)}
      data-reveal={reveal ? "image" : undefined}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        {...blurProps(image)}
        style={image.position ? { objectPosition: image.position } : undefined}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
