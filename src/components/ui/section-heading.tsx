import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  title: ReactNode;
  intro?: ReactNode;
  /** Small label above the title. Use sparingly: at most one per three sections. */
  label?: string;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
  size?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  title,
  intro,
  label,
  as: Tag = "h2",
  tone = "light",
  size = "h2",
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", className)} data-reveal>
      {label && (
        <p
          className={cn("mb-6 text-label", tone === "light" ? "text-signal" : "text-signal-bright")}
        >
          {label}
        </p>
      )}
      <Tag className={cn(size === "h1" ? "text-h1" : "text-h2", tone === "dark" && "text-white")}>
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-[62ch] text-lead",
            tone === "light" ? "text-steel-500" : "text-steel-300",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
