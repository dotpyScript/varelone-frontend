import Link from "next/link";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Buttons are the one rounded element in an otherwise sharp system:
 * a full pill, with the icon set in a circular badge at the trailing end.
 */
export type ButtonVariant =
  "primary" | "dark" | "outline" | "outline-light" | "text" | "text-light";
export type ButtonSize = "md" | "sm" | "lg";
export type ButtonIconName = "arrow" | "external" | "none";

const pill =
  "group inline-flex items-center rounded-full whitespace-nowrap font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const surface: Record<ButtonVariant, string> = {
  primary: "bg-signal text-white hover:bg-signal-deep",
  dark: "bg-ink-950 text-white hover:bg-ink-800",
  outline:
    "border border-ink-900/20 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
  "outline-light": "bg-white text-ink-950 hover:bg-paper",
  text: "min-h-11 text-ink-900 underline-offset-[6px] hover:underline",
  "text-light": "min-h-11 text-white underline-offset-[6px] hover:underline",
};

// Circular icon badge colours per variant.
const badge: Record<ButtonVariant, string> = {
  primary: "bg-white text-signal",
  dark: "bg-signal text-white",
  outline: "bg-ink-900 text-signal-bright group-hover:bg-signal group-hover:text-white",
  "outline-light": "bg-ink-950 text-signal-bright group-hover:bg-signal group-hover:text-white",
  text: "",
  "text-light": "",
};

const sizes: Record<ButtonSize, { withIcon: string; plain: string; badge: string; icon: string }> =
  {
    // Mobile-first: compact on phones (still a 44px touch target), full size from `sm`.
    sm: {
      withIcon: "min-h-11 gap-2.5 py-1 pr-1 pl-4 text-sm sm:gap-3 sm:pl-5 sm:text-[0.9rem]",
      plain: "min-h-11 px-5 text-sm sm:text-[0.9rem]",
      badge: "size-8 sm:size-9",
      icon: "size-3.5 sm:size-4",
    },
    md: {
      withIcon:
        "min-h-11 gap-3 py-1 pr-1 pl-5 text-[0.9rem] sm:min-h-13 sm:gap-4 sm:py-1.5 sm:pr-1.5 sm:pl-6 sm:text-[0.95rem]",
      plain: "min-h-11 px-6 text-[0.9rem] sm:min-h-12 sm:px-7 sm:text-[0.95rem]",
      badge: "size-9 sm:size-10",
      icon: "size-4 sm:size-[1.1rem]",
    },
    lg: {
      withIcon: "min-h-14 gap-4 py-1.5 pr-1.5 pl-6 text-base sm:min-h-15 sm:pl-7 sm:text-lg",
      plain: "min-h-13 px-7 text-base sm:min-h-14 sm:px-8 sm:text-lg",
      badge: "size-11 sm:size-12",
      icon: "size-[1.1rem] sm:size-5",
    },
  };

export function buttonClasses({
  variant = "primary",
  size = "md",
  hasIcon = true,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hasIcon?: boolean;
  className?: string;
}) {
  const isText = variant === "text" || variant === "text-light";
  return cn(
    pill,
    surface[variant],
    isText ? "gap-2 px-0" : hasIcon ? sizes[size].withIcon : sizes[size].plain,
    className,
  );
}

export function ButtonIcon({
  icon = "arrow",
  variant = "primary",
  size = "md",
  loading = false,
}: {
  icon?: ButtonIconName;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}) {
  if (icon === "none" && !loading) return null;
  const isText = variant === "text" || variant === "text-light";
  const glyph = cn(
    sizes[size].icon,
    "shrink-0 transition-transform duration-300 ease-out",
    !loading &&
      (icon === "external"
        ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        : "group-hover:translate-x-0.5"),
  );
  const Glyph = loading ? Loader2 : icon === "external" ? ArrowUpRight : ArrowRight;
  const svg = <Glyph aria-hidden className={cn(glyph, loading && "animate-spin")} />;

  if (isText) return svg;
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full transition-colors duration-300",
        sizes[size].badge,
        badge[variant],
      )}
    >
      {svg}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIconName;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon = "arrow",
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonClasses({ variant, size, hasIcon: icon !== "none", className })}
      {...rest}
    >
      <span>{children}</span>
      <ButtonIcon icon={icon} variant={variant} size={size} />
    </Link>
  );
}

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIconName;
  loading?: boolean;
  children: ReactNode;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  icon = "none",
  loading = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const hasIcon = icon !== "none" || loading;
  return (
    <button className={buttonClasses({ variant, size, hasIcon, className })} {...rest}>
      <span>{children}</span>
      <ButtonIcon icon={icon} variant={variant} size={size} loading={loading} />
    </button>
  );
}
