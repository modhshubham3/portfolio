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
    card: "summary",
    title: "Shubham Modh — Full-Stack .NET Developer",
    description,
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚌</text></svg>",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1120" },
    { media: "(prefers-color-scheme: light)", color: "#f6f9f8" },
  ],
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
      </head>
      <body className="bg-bg font-sans text-[17px] leading-[1.6] text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
