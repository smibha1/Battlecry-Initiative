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
              Battlecry Initiative and our path to opening the Battlecry Training
              Facility. Your purchase funds scholarships, gear for participants,
              and the future facility.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding grunge-bg">
        <div className="max-section">
          <p className="font-display text-2xl tracking-wider text-cream">
            Store embed (Shopify / Ecwid)
          </p>
          <p className="mt-4 font-body text-grit-400">
            Categories: <strong className="text-sand">Apparel</strong> (shirts,
            sweaters) · <strong className="text-sand">Training gear</strong> (Gi,
            No-Gi)
          </p>
          <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-xl border-2 border-dashed border-grit-600 bg-grit-800/30">
            <div className="text-center">
              <p className="font-body text-grit-400">
                [ Shopify store or Buy Buttons will be embedded here ]
              </p>
              <p className="mt-2 font-body text-sm text-grit-500">
                Use Shopify’s embed code or link to shop.battlecryinitiative.org
                with the same header/footer for a consistent look.
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
