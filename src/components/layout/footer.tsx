import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { currentSolutions } from "@/content/solutions";
import { contactNav, primaryNav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { email, phone, address } = site.contact;

  return (
    <footer className="on-dark border-t border-line-dark bg-ink-950 text-steel-300">
      <div className="container-site grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Varelon Energy, home" className="inline-block text-white">
            <Logo />
          </Link>
          <p className="mt-6 max-w-sm">
            Practical energy and infrastructure solutions for businesses, producers and institutions
            in Nigeria.
          </p>
          {(email || phone || address) && (
            <address className="mt-8 space-y-1 not-italic">
              {email && (
                <a className="block text-white hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              )}
              {phone && (
                <a
                  className="block text-white hover:underline"
                  href={`tel:${phone.replace(/\s/g, "")}`}
                >
                  {phone}
                </a>
              )}
              {address && <p>{address}</p>}
            </address>
          )}
        </div>

        <nav aria-label="Solutions" className="md:col-span-4">
          <h2 className="text-label text-steel-400">Current solutions</h2>
          <ul className="mt-5 space-y-1">
            {currentSolutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions#${s.slug}`}
                  className="inline-block py-1.5 text-white/85 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-3">
          <h2 className="text-label text-steel-400">Company</h2>
          <ul className="mt-5 space-y-1">
            {[...primaryNav.filter((i) => i.href !== "/solutions"), contactNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1.5 text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-site flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p>Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
