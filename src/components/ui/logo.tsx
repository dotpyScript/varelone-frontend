import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Brand mark (cropped from the official logo in /public/favicon) plus a live-text
 * wordmark that inherits the surrounding colour. The mark's dark-green stroke
 * disappears on ink backgrounds, so a reversed version is swapped in on `.on-dark`.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/varelon-mark.png"
        alt=""
        width={122}
        height={96}
        loading="eager"
        unoptimized
        className="h-8 w-auto shrink-0 in-[.on-dark]:hidden"
      />
      <Image
        src="/brand/varelon-mark-reversed.png"
        alt=""
        width={122}
        height={96}
        loading="eager"
        unoptimized
        className="hidden h-8 w-auto shrink-0 in-[.on-dark]:block"
      />
      <span className="font-display text-[1.05rem] leading-none font-semibold tracking-[0.14em] [font-stretch:115%]">
        VARELON
        <span className="sr-only"> Energy</span>
      </span>
    </span>
  );
}
