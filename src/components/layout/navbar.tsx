"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { contactNav, ctaLabels, primaryNav } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [
          toggleRef.current,
          ...panelRef.current.querySelectorAll<HTMLElement>("a"),
        ].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300",
        solid
          ? "border-b border-line bg-paper/95 text-ink-900 backdrop-blur-sm"
          : open
            ? "on-dark border-b border-line-dark bg-ink-950 text-white"
            : "on-dark border-b border-transparent text-white",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="container-site flex h-[4.5rem] items-center justify-between gap-6"
      >
        <Link href="/" aria-label="Varelon Energy, home" className="-m-2 p-2">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[0.95rem] transition-opacity hover:opacity-100",
                  isActive(item.href) ? "opacity-100" : "opacity-75",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300",
                  isActive(item.href)
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* On phones the menu carries this CTA, so the header stays uncluttered. */}
          <div className="hidden md:block">
            <ButtonLink href={contactNav.href} size="sm" variant={solid ? "dark" : "outline-light"}>
              {ctaLabels.contact}
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-12 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="on-dark fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-ink-950 text-white lg:hidden"
      >
        <div className="container-site flex min-h-full flex-col justify-between gap-12 pt-8 pb-10">
          <ul className="border-t border-line-dark">
            {[...primaryNav, contactNav].map((item, i) => (
              <li key={item.href} className="border-b border-line-dark">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="text-h3">{item.label}</span>
                  <span aria-hidden className="text-label text-steel-400">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href={contactNav.href} size="lg" className="justify-between">
            {ctaLabels.contact}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
