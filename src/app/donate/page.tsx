import Link from "next/link";

export default function DonatePage() {
  return (
    <>
      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rust-500">
            Donate
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wider text-cream md:text-5xl lg:text-6xl">
            Support Our Mission
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg text-grit-300">
            Your gift funds scholarships, gear, and support for programs currently
            run out of Tri-City Gym. Every dollar helps.
          </p>
        </div>
      </section>

      <section id="sponsor" className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-2xl tracking-wider text-cream">
            Donation Amount
          </h2>
          <p className="mt-2 font-body text-grit-400">
            One-time or monthly. Tax-deductible. Secure. You&apos;ll receive a receipt by email.
          </p>
          <p className="mt-3 inline-block rounded-full border border-grit-600 bg-grit-800 px-4 py-1 font-body text-sm text-grit-300">
            comming soon
          </p>

          {/* Mock form - replace with Stripe/Donorbox etc. */}
          <div className="mt-8 max-w-lg opacity-50 pointer-events-none grayscale">
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                className="rounded-lg border border-grit-600 bg-grit-800 px-4 py-2 font-body text-sm text-grit-300 transition hover:border-rust-500"
              >
                One-time
              </button>
              <button
                type="button"
                className="rounded-lg border border-grit-600 bg-grit-800 px-4 py-2 font-body text-sm text-grit-400 transition hover:border-grit-500"
              >
                Monthly
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className="rounded-lg border-2 border-grit-600 bg-grit-800 px-6 py-3 font-display text-lg text-cream transition hover:border-rust-500 hover:bg-grit-700"
                >
                  ${amount}
                </button>
              ))}
              <button
                type="button"
                className="rounded-lg border-2 border-rust-500 bg-grit-800 px-6 py-3 font-display text-lg text-rust-400 transition hover:bg-grit-700"
              >
                Custom
              </button>
            </div>
            <p className="mt-6 font-body text-sm text-grit-400">
              [ Payment form will connect to Stripe / Donorbox / your processor. ]
            </p>
            <button type="button" className="btn-primary mt-6 w-full">
              Continue to Payment
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-2xl tracking-wider text-cream">
            Your Donation Helps
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Helping a Hero",
                bullets: ["Scholarships for veterans", "Mats, gear, and a place to train", "Community and brotherhood"],
              },
              {
                title: "Supporting a Survivor",
                bullets: ["Safe space for women in need", "Self-defense and confidence", "Healing through the mat"],
              },
              {
                title: "Guiding a Child",
                bullets: ["Programs for at-risk youth", "Mentorship and discipline", "A place to belong"],
              },
              {
                title: "Program Support",
                bullets: ["Tri-City Gym class support", "Equipment and mat space", "Community outreach and events"],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-xl border border-grit-600/50 bg-grit-800/50 p-5"
              >
                <h3 className="font-display text-lg tracking-wider text-rust-400">
                  {block.title}
                </h3>
                <ul className="mt-3 space-y-1.5 font-body text-sm text-grit-300">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-rust-500">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-2xl tracking-wider text-cream">
            Or Sponsor Directly
          </h2>
          <p className="mt-2 font-body text-grit-400">
            Sponsor a student, gear, or a month of training.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-lg border border-grit-600 bg-grit-800 px-5 py-2.5 font-body text-sm text-grit-300 transition hover:border-rust-500"
            >
              Sponsor a Student
            </button>
            <button
              type="button"
              className="rounded-lg border border-grit-600 bg-grit-800 px-5 py-2.5 font-body text-sm text-grit-300 transition hover:border-rust-500"
            >
              Sponsor Gear
            </button>
            <button
              type="button"
              className="rounded-lg border border-grit-600 bg-grit-800 px-5 py-2.5 font-body text-sm text-grit-300 transition hover:border-rust-500"
            >
              Sponsor a Month of Training
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding grunge-bg">
        <div className="max-section text-center">
          <p className="font-body text-grit-400">
            Questions?{" "}
            <a
              href="mailto:info@battlecryinitiative.com"
              className="text-rust-400 hover:underline"
            >
              info@battlecryinitiative.com
            </a>
          </p>
          <Link href="/" className="mt-4 inline-block font-body text-grit-400 hover:text-rust-300">
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
