import { ImageResponse } from "next/og";

// Required for `output: "export"` — renders the card once at build time.
export const dynamic = "force-static";
export const alt = "Shubham Modh — Full-Stack .NET Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stats = [
  { value: "~700", label: "buses tracked live" },
  { value: "~6M", label: "GPS packets / day" },
  { value: "2.7 yrs", label: "production .NET" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a1120",
          padding: "68px 72px",
          position: "relative",
        }}
      >
        {/* soft mint glow, top right */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -220,
            width: 760,
            height: 760,
            background:
              "radial-gradient(circle, rgba(63,224,160,0.22) 0%, rgba(63,224,160,0.07) 30%, rgba(63,224,160,0) 50%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#3fe0a0",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#8fa3b8",
              textTransform: "uppercase",
            }}
          >
            Full-Stack .NET Developer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, color: "#e6edf5", lineHeight: 1.05 }}>
            Shubham Modh
          </div>
          <div style={{ fontSize: 38, color: "#3fe0a0", marginTop: 18, lineHeight: 1.3 }}>
            I keep a city&apos;s buses on the map, in real time.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 44 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 40, fontWeight: 700, color: "#e6edf5" }}>{s.value}</div>
                <div style={{ fontSize: 20, color: "#8fa3b8", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: "#8fa3b8", display: "flex" }}>
            shubham-modh.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
