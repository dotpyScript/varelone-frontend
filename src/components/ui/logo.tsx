import { cn } from "@/lib/cn";

/**
 * Interim wordmark. No official Varelon logo was supplied; replace this
 * component with the brand asset when it is available.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 24 24" aria-hidden className="size-6 shrink-0" fill="none">
        <path d="M2 3h6.5L12 14.5 15.5 3H22L14.5 21h-5L2 3Z" fill="currentColor" />
        <path d="M15.5 3H22l-3.2 7.6h-6.1L15.5 3Z" className="fill-signal-bright" />
      </svg>
      <span className="font-display text-[1.05rem] leading-none font-semibold tracking-[0.14em] [font-stretch:115%]">
        VARELON
        <span className="sr-only"> Energy</span>
      </span>
    </span>
  );
}
