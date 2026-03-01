import Image from "next/image";

const APPAREL_PREVIEWS = [
  { name: "Battlecry T-Shirt", image: "/images/Tshirt.png" },
  { name: "Battlecry Hoodie", image: "/images/Hoodie.png" },
];

export default function ShopPage() {
  return (
    <>
      <section className="section-padding border-b border-grit-700/30 grunge-bg">
        <div className="max-section">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rust-500">
            Shop
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wider text-cream md:text-5xl lg:text-6xl">
            Apparel & Gear
          </h1>
          <div className="mt-6 rounded-lg border border-rust-500/30 bg-grit-800/50 px-6 py-4">
            <p className="font-body text-grit-300">
              <strong className="text-cream">All proceeds</strong> support
              Battlecry Initiative and programs currently run out of Tri-City Gym.
              Your purchase funds scholarships, gear for participants, and class
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <p className="font-display text-2xl tracking-wider text-cream">
            Featured Apparel
          </p>
          <p className="mt-3 font-body text-grit-400">
            Preview of our first drop while checkout is being finalized.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {APPAREL_PREVIEWS.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-grit-600 bg-grit-800/60"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-grit-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grit-950/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between border-t border-grit-600 px-5 py-4">
                  <p className="font-display text-lg tracking-wider text-cream">
                    {item.name}
                  </p>
                  <span className="rounded-full border border-rust-500/50 px-3 py-1 font-body text-xs uppercase tracking-wider text-rust-400">
                    comming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding grunge-bg">
        <div className="max-section">
          <p className="font-display text-2xl tracking-wider text-cream">
            comming soon
          </p>
          <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-xl border-2 border-dashed border-grit-600 bg-grit-800/30 opacity-60">
            <div className="text-center">
              <p className="font-body text-grit-400">
                Store embed (Shopify / Ecwid)
              </p>
              <p className="mt-2 font-body text-sm text-grit-500">
                comming soon
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-sm text-grit-400">
            Your purchase is secure. Proceeds go to the nonprofit.
          </p>
        </div>
      </section>
    </>
  );
}
