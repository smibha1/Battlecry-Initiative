import Link from "next/link";
import Image from "next/image";

// Hero and Who We Serve images from public folder
const HERO_IMAGE = "/images/main-page.png";
const WHO_SERVE_IMAGES = [
  "/images/icon-veteran.png",
  "/images/icon-women.png",
  "/images/icon-youth.png",
];
const HOW_BJJ_IMAGES = [
  "/images/confidence.png",
  "/images/resilience.png",
  "/images/emotional-control.png",
  "/images/structure.png",
  "/images/belonging.png",
];

const whoWeServe = [
  {
    title: "Veterans",
    desc: "Transition, PTSD, and finding a new community. Jiu Jitsu offers structure, brotherhood, and a way to process what they've carried.",
    image: WHO_SERVE_IMAGES[0],
  },
  {
    title: "Women",
    desc: "Safety, confidence, and reclaiming their bodies. We offer a supportive space to build strength and self-trust.",
    image: WHO_SERVE_IMAGES[1],
  },
  {
    title: "Youth",
    desc: "Discipline, character, and a place to belong. We give kids a positive outlet and mentors who show up.",
    image: WHO_SERVE_IMAGES[2],
  },
];

const howBjjHelps = [
  { label: "Confidence", short: "Own your strength.", image: HOW_BJJ_IMAGES[0] },
  { label: "Resilience", short: "Struggle. Adapt. Rise.", image: HOW_BJJ_IMAGES[1] },
  { label: "Emotional Control", short: "Stay steady.", image: HOW_BJJ_IMAGES[2] },
  { label: "Structure", short: "Show up. Build stability.", image: HOW_BJJ_IMAGES[3] },
  { label: "Belonging", short: "Built together.", image: HOW_BJJ_IMAGES[4] },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: headline + BJJ bg (no lion overlay) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-grit-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover grayscale contrast-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-grit-950/80" />
        </div>
        <div className="relative z-10 max-section section-padding grunge-bg flex flex-col md:flex-row md:items-center md:gap-12">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-grit-400 md:text-base">
              Nonprofit
            </p>
            <h1 className="mt-2 font-display text-4xl leading-[1.05] tracking-wider text-cream md:text-6xl lg:text-7xl">
              Empowering Lives
              <br />
              <span className="text-rust-400">Through Jiu Jitsu</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-grit-300">
            We use Jiu Jitsu to help veterans, women, and youth with daily
            struggles, character development, confidence, and overcoming fear and
            trauma.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary">
                Donate
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Get Involved
              </Link>
              <Link
                href="/about"
                className="font-body text-grit-400 underline decoration-rust-500/50 underline-offset-4 transition hover:decoration-rust-400 hover:text-cream"
              >
                Our Mission →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve - BJJ-relevant images, grey contrast */}
      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream md:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-2 font-body text-grit-400">
            We support three communities that deserve a path to strength and belonging.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whoWeServe.map((item) => (
              <div
                key={item.title}
                className="card-hover overflow-hidden rounded-xl border border-grit-600 bg-grit-800"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-grit-600 p-6">
                  <h3 className="font-display text-xl tracking-wider text-rust-400">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-grit-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Jiu Jitsu helps - BJJ imagery, grey cards */}
      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream md:text-4xl">
            How Jiu Jitsu Helps
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howBjjHelps.map((item) => (
              <div
                key={item.label}
                className="card-hover overflow-hidden rounded-lg border border-grit-600 bg-grit-800"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="border-t-4 border-t-rust-500 py-4 pl-5 pr-4">
                  <p className="font-display text-lg tracking-wider text-cream">
                    {item.label}
                  </p>
                  <p className="mt-1 font-body text-sm text-grit-400">{item.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream md:text-4xl">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Discipline",
                body: "Growth is built through consistency. We believe in showing up, honoring commitments, and doing the work even when it's hard. Discipline creates stability—and stability creates freedom.",
              },
              {
                title: "Courage",
                body: "Real courage is quiet. It's walking into a room when you're unsure. It's trying again after you've failed. We create space for people to face discomfort safely and discover strength they didn't know they had.",
              },
              {
                title: "Service",
                body: "Strength is not meant to be kept—it's meant to be used for good. We lead with humility and responsibility, teaching that protecting and uplifting others is part of true leadership.",
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

      {/* Ways to help - grey contrast */}
      <section className="section-padding grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-3xl tracking-wider text-cream md:text-4xl">
            Ways to Help
          </h2>
          <p className="mt-2 font-body text-grit-400">
            Donate, sponsor, volunteer, or partner with us.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Donate", href: "/donate", desc: "One-time or monthly support." },
              {
                label: "Sponsor",
                href: "/donate#sponsor",
                desc: "A student, gear, or a month of training.",
              },
              {
                label: "Volunteer",
                href: "/get-involved#volunteer",
                desc: "Time and skills on the mat or behind the scenes.",
              },
              {
                label: "Partner",
                href: "/get-involved#partner",
                desc: "Businesses and orgs: align with our mission.",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="card-hover block rounded-xl border border-grit-600 bg-grit-800 p-6 transition hover:border-rust-500/50"
              >
                <h3 className="font-display text-xl tracking-wider text-rust-400">
                  {item.label}
                </h3>
                <p className="mt-2 font-body text-sm text-grit-400">{item.desc}</p>
                <span className="mt-3 inline-block font-body text-sm text-rust-400">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
