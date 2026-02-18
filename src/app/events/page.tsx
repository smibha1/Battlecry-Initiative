"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TRI_CITY_ADDRESS = "18179 Pioneer Blvd, Artesia, CA 90701";
const TRI_CITY_DIRECTIONS =
  "https://www.google.com/maps/dir//18179+Pioneer+Blvd,+Artesia,+CA+90701";
const EVENT_NAME = "Free Women's Self-Defense";
const EVENT_TIME = "8:00 PM – 9:00 PM";
const EVENT_LOCATION = "Tri-City Jiu Jitsu · Artesia";

// Next 3 Tuesdays starting Feb 17, 2026
function getNextThreeTuesdays(): { label: string; date: Date }[] {
  const out: { label: string; date: Date }[] = [];
  const start = new Date("2026-02-17T20:00:00");
  for (let i = 0; i < 3; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i * 7);
    out.push({
      label: d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      date: d,
    });
  }
  return out;
}

const upcomingDates = getNextThreeTuesdays();

function FlyerImage() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex aspect-[3/4] w-48 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-grit-600 bg-grit-800 p-4 text-center md:w-56 lg:w-64">
        <span className="font-display text-sm uppercase tracking-wider text-grit-500">
          Event flyer
        </span>
        <span className="font-body text-xs text-grit-500">
          Add pink-lion-flyer.png to public/images
        </span>
      </div>
    );
  }
  return (
    <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-xl border border-grit-600 md:w-56 lg:w-64">
      <Image
        src="/images/pink-lion-flyer.png"
        alt="Free Women's Self-Defense flyer"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const FLYER_BULLETS = [
  "No experience needed",
  "Ages 13+ welcome",
  "Wear comfy clothes",
];

export default function EventsPage() {
  return (
    <>
      <section className="section-padding border-b border-grit-600 grunge-bg">
        <div className="max-section">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rust-500">
            Events
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wider text-cream md:text-5xl lg:text-6xl">
            Women&apos;s Self-Defense
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-grit-300">
            Free women&apos;s self-defense classes hosted by Battlecry Initiative at
            Tri-City Jiu Jitsu. No experience needed—just show up.
          </p>
        </div>
      </section>

      {/* Event info + flyer */}
      <section className="section-padding border-b border-grit-600 bg-grit-900 grunge-bg">
        <div className="max-section">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1">
              <h2 className="font-display text-2xl tracking-wider text-cream md:text-3xl">
                {EVENT_NAME}
              </h2>
              <p className="mt-2 font-body text-lg text-rose-300">
                Tuesdays · {EVENT_TIME}
              </p>
              <p className="mt-1 font-body text-grit-300">
                {EVENT_LOCATION}
              </p>
              <a
                href={TRI_CITY_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-body text-rust-400 underline underline-offset-2 hover:text-rust-300"
              >
                {TRI_CITY_ADDRESS} — Get directions
              </a>
              <ul className="mt-8 space-y-2">
                {FLYER_BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 font-body text-grit-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <FlyerImage />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events: next 3 Tuesdays */}
      <section className="section-padding grunge-bg">
        <div className="max-section">
          <h2 className="font-display text-2xl tracking-wider text-cream">
            Upcoming Events
          </h2>
          <p className="mt-2 font-body text-grit-400">
            {EVENT_TIME} at Tri-City Jiu Jitsu.{" "}
            <a
              href={TRI_CITY_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-400 underline hover:text-rust-300"
            >
              Directions
            </a>
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {upcomingDates.map(({ label }) => (
              <div
                key={label}
                className="rounded-xl border border-grit-600 bg-grit-800 p-5"
              >
                <p className="font-display text-lg tracking-wider text-cream">
                  {EVENT_NAME}
                </p>
                <p className="mt-2 font-body text-sm text-grit-300">{label}</p>
                <p className="mt-1 font-body text-sm text-grit-400">
                  {EVENT_TIME}
                </p>
                <p className="mt-1 font-body text-sm text-grit-400">
                  {EVENT_LOCATION}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body text-grit-400">
            Questions? Email{" "}
            <a
              href="mailto:info@battlecryinitiative.com"
              className="text-rust-400 hover:underline"
            >
              info@battlecryinitiative.com
            </a>{" "}
            or follow us on{" "}
            <Link
              href="https://www.instagram.com/battlecry_initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-400 hover:underline"
            >
              Instagram
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
