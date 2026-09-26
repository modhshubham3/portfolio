"use client";

import SlidingLogoMarquee from "../ls/sliding-logo-marquee";

/** Tech he actually ships with, in the two-row marquee the template uses. */
const rowOne = [
  "C#",
  "ASP.NET Core",
  "Angular",
  "TypeScript",
  "PostgreSQL",
  "Apache Kafka",
  "Redis",
];
const rowTwo = [
  "SignalR",
  "Tile38",
  "Docker",
  "Linux",
  "Google Cloud",
  "Web API",
  "Jenkins",
];

function chip(name: string) {
  return {
    id: name,
    content: (
      <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-panel px-5 py-2.5 text-[14.5px] font-semibold shadow-card">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2f9bf5]" />
        {name}
      </span>
    ),
  };
}

export default function StackMarquee() {
  return (
    <section id="stack" aria-label="Tech stack" className="mt-16 border-y border-line py-7">
      <div className="flex flex-col gap-4">
        <SlidingLogoMarquee
          items={rowOne.map(chip)}
          speed={26}
          height="58px"
          gap="14px"
          pauseOnHover
          enableBlur
          backgroundColor="transparent"
        />
        <SlidingLogoMarquee
          items={rowTwo.map(chip)}
          speed={30}
          height="58px"
          gap="14px"
          pauseOnHover
          enableBlur
          backgroundColor="transparent"
        />
      </div>
    </section>
  );
}
