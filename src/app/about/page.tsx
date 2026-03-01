import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rust-500">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wider text-cream md:text-5xl lg:text-6xl">
            Our Mission & Story
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg text-grit-300">
            Battlecry Initiative is the nonprofit arm of our work. We use Jiu Jitsu
            to help veterans, battered women, and underprivileged youth with daily
            struggles, character development, confidence, and overcoming fear and
            trauma. We believe the mat is a place where people can rebuild.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream">
            Who We Serve
          </h2>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "Veterans",
                body: "Many veterans struggle with transition, PTSD, and finding a new sense of purpose and community. Jiu Jitsu offers structure, camaraderie, and a physical way to process what they've carried. We provide a space where they can train and belong.",
              },
              {
                title: "Battered Women",
                body: "Women who have experienced abuse often need a safe way to reclaim their bodies and build confidence. Our program focuses on self-defense, strength, and a supportive community—no judgment, just growth.",
              },
              {
                title: "Underprivileged Youth",
                body: "Kids without access to positive outlets often lack discipline, mentorship, and a sense of belonging. We give them a place to learn Jiu Jitsu, build character, and connect with adults who show up for them.",
              },
            ].map((item) => (
              <div key={item.title} className="max-w-2xl">
                <h3 className="font-display text-xl tracking-wider text-rust-400">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-grit-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream">
            How Our Program Works
          </h2>
          <p className="mt-4 max-w-2xl font-body text-grit-300">
            We run classes and community support built around Jiu Jitsu—structured
            training, mentorship, and a culture of showing up for each other. We
            currently train out of Tri-City Gym while building long-term support for
            our programs.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 font-body text-grit-300">
            <li>Structured classes for each population we serve</li>
            <li>Community support and peer connection</li>
            <li>Mentorship from experienced practitioners</li>
            <li>Scholarships and gear support for those who need it</li>
          </ul>
        </div>
      </section>

      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Discipline",
                body: "Growth is built through consistency. We believe in showing up, honoring commitments, and doing the work even when it&apos;s hard. Discipline creates stability - and stability creates freedom.",
              },
              {
                title: "Courage",
                body: "Real courage is quiet. It&apos;s walking into a room when you&apos;re unsure. It&apos;s trying again after you&apos;ve failed. We create space for people to face discomfort safely and discover strength they didn&apos;t know they had.",
              },
              {
                title: "Service",
                body: "Strength is not meant to be kept - it&apos;s meant to be used for good. We lead with humility and responsibility, teaching that protecting and uplifting others is part of true leadership.",
              },
              {
                title: "Community",
                body: "Healing does not happen in isolation. We foster an environment of respect, accountability, and belonging. When one person grows, the whole community grows with them.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-grit-600/50 bg-grit-800/30 p-6"
              >
                <p className="font-display text-lg tracking-wider text-rust-400">
                  {value.title}
                </p>
                <p className="mt-3 font-body text-grit-300">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream">
            Where We Train
          </h2>
          <p className="mt-6 max-w-2xl font-body text-grit-300">
            We currently run classes and events out of Tri-City Gym in Artesia. Your
            support helps us keep programs accessible for veterans, women in need,
            and underprivileged youth.
          </p>
          <Link href="/events" className="btn-primary mt-8">
            View Class Events
          </Link>
        </div>
      </section>
    </>
  );
}
