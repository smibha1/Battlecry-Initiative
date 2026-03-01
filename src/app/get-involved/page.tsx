import Image from "next/image";

const TRI_CITY_DIRECTIONS =
  "https://www.google.com/maps/dir//18179+Pioneer+Blvd,+Artesia,+CA+90701";

export default function GetInvolvedPage() {
  return (
    <>
      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rust-500">
            Get Involved
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wider text-cream md:text-5xl lg:text-6xl">
            Join the Mission
            <br />
            <span className="text-rust-400">Volunteer or Partner With Us</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg text-grit-300">
            You can support our mission by volunteering your time or partnering
            with us as a business or organization.
          </p>
        </div>
      </section>

      <section id="partner" className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-grit-600">
              <Image
                src="/images/partner.png"
                alt="Community and partnership"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl tracking-wider text-cream">
                Partner
              </h2>
              <p className="mt-3 max-w-xl font-body text-grit-300">
                Businesses and organizations: sponsor events, run cause campaigns, or
                partner with us for visibility and impact.
              </p>
              <a
                href="mailto:info@battlecryinitiative.com?subject=Partnership%20inquiry"
                className="btn-secondary mt-6"
              >
                Email Us to Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-grit-600 md:order-2">
              <Image
                src="/images/volunteer.png"
                alt="Training and volunteering"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-2xl tracking-wider text-cream">
                Volunteer
              </h2>
              <p className="mt-3 max-w-xl font-body text-grit-300">
                Help on the mat, at events, or with outreach and admin. We need people
                who can show up consistently.
              </p>
              <a
                href="mailto:info@battlecryinitiative.com?subject=Volunteer%20inquiry"
                className="btn-secondary mt-6"
              >
                Email Us to Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners / Sponsors */}
      <section className="section-padding grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-2xl tracking-wider text-cream">
            Our Partner
          </h2>
          <p className="mt-2 font-body text-grit-400">
            Thank you to our partner who helps make our programs possible.
          </p>
          <div className="mt-8 flex items-center justify-center rounded-xl border border-rust-500/40 bg-grit-800 px-8 py-12">
            <a
              href={TRI_CITY_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition opacity-95 hover:opacity-100"
            >
              <div className="relative h-24 w-56 md:h-28 md:w-72">
                <Image
                  src="/images/tri-city-logo.png"
                  alt="Tri-City Jiu-Jitsu Club"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
