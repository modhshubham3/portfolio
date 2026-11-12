import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

const description =
  "Full-stack .NET engineer building real-time GPS fleet-tracking systems (~700 buses) on C#, PostgreSQL, Kafka, and Angular.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubham-modh.vercel.app"),
  title: "Shubham Modh — Full-Stack .NET Developer",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shubham Modh — Full-Stack .NET Developer",
    description,
    type: "website",
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Modh — Full-Stack .NET Developer",
    description,
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%22 stop-color=%22%237c3aed%22/><stop offset=%221%22 stop-color=%22%232f9bf5%22/></linearGradient></defs><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23g)%22/><text x=%2250%22 y=%2271%22 text-anchor=%22middle%22 font-family=%22Georgia,serif%22 font-style=%22italic%22 font-weight=%22700%22 font-size=%2262%22 fill=%22white%22>S</text></svg>",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1120" },
    { media: "(prefers-color-scheme: light)", color: "#f6f9f8" },
  ],
};

/* Who this page is about, in the form search engines read (name, job, where to find him). */
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Modh",
  jobTitle: "Full-Stack .NET Developer",
  description,
  url: "https://shubham-modh.vercel.app",
  email: "mailto:modhshubham3@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Amnex Infotechnologies" },
  knowsAbout: ["C#", "ASP.NET Core", "Angular", "PostgreSQL", "Apache Kafka", "Redis", "SignalR", "Docker"],
  sameAs: ["https://github.com/modhshubham3", "https://www.linkedin.com/in/shubham-modh-26a23021b"],
};

const themeInit = `try{var t=localStorage.getItem("sm-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-bg font-sans text-[17px] leading-[1.6] text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
