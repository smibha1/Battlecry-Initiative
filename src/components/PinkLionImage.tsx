"use client";

import { useState } from "react";

/**
 * Pink lion asset: save the pink lion image from Instagram to public/pink-lion.png
 * to show it here. Until then, a rose-accent placeholder is shown.
 */
export function PinkLionImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex aspect-square max-w-[280px] items-center justify-center rounded-xl border-2 border-rose-500/40 bg-grit-800/80"
        aria-hidden
      >
        <span className="font-display text-2xl tracking-wider text-rose-400/80">
          BC
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square max-w-[280px] overflow-hidden rounded-xl border-2 border-rose-500/40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/pink-lion.png"
        alt="Battlecry women's events"
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
