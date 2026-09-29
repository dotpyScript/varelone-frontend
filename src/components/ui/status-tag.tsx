import { cn } from "@/lib/cn";

/**
 * The site's single device for separating what Varelon offers today from
 * where it is heading. Use it wherever the distinction could be unclear.
 */
export type Status = "current" | "growing" | "expansion" | "long-term";

const labels: Record<Status, string> = {
  current: "Available now",
  growing: "Building",
  expansion: "Expansion area",
  "long-term": "Long-term goal",
};

export function StatusTag({
  status,
  tone = "light",
  className,
}: {
  status: Status;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isCurrent = status === "current";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-label whitespace-nowrap",
        tone === "light" ? "text-steel-500" : "text-steel-300",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block size-2",
          isCurrent
            ? tone === "light"
              ? "bg-signal"
              : "bg-signal-bright"
            : "border border-current bg-transparent",
        )}
      />
      {labels[status]}
    </span>
  );
}
