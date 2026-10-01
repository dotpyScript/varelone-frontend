import { ArrowUpRight } from "lucide-react";
import { openingHours, site } from "@/content/site";

/** Head office, direct contact lines and opening hours, for the contact page. */
export function ContactDetails() {
  const { email, phone, phoneHref, address, mapUrl } = site.contact;

  return (
    <section
      aria-labelledby="details-title"
      className="on-dark border-t border-line-dark bg-ink-900 pb-20 text-white md:pb-28"
    >
      <div className="container-site">
        <h2 id="details-title" className="sr-only">
          Contact details
        </h2>
        <div className="grid gap-12 pt-12 md:grid-cols-3 md:gap-10 md:pt-16">
          <div data-reveal>
            <h3 className="text-label text-steel-400">Head office</h3>
            <address className="mt-5 text-lg text-white not-italic">
              {address.street}
              <br />
              {address.district}, {address.city}
              <br />
              {address.region}, {address.country}
            </address>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-signal-bright hover:text-white"
            >
              Open in Google Maps
              <span className="sr-only">(opens in a new tab)</span>
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            <h3 className="text-label text-steel-400">Get in touch</h3>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-sm text-steel-400">Telephone</dt>
                <dd>
                  <a href={phoneHref} className="text-lg text-white hover:underline">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-steel-400">Email</dt>
                <dd>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg wrap-anywhere text-white hover:underline"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            <h3 className="text-label text-steel-400">Opening hours</h3>
            <dl className="mt-5 border-t border-line-dark">
              {openingHours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-baseline justify-between gap-6 border-b border-line-dark py-3"
                >
                  <dt className="text-steel-300">{h.days}</dt>
                  <dd className={h.opens ? "text-white tabular-nums" : "text-steel-400"}>
                    {h.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
