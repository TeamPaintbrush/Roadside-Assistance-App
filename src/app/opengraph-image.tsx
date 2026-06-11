import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "RoadAssist Pro — AI-Powered Roadside Assistance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #4338ca 100%)",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: "white",
              borderRadius: 10,
            }}
          />
        </div>

        <div
          style={{
            color: "white",
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: 16,
            display: "flex",
          }}
        >
          RoadAssist&nbsp;
          <span style={{ color: "#93c5fd" }}>Pro</span>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 28,
            marginBottom: 56,
            display: "flex",
          }}
        >
          AI-Powered Roadside Assistance
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {(["1.8s Dispatch", "15 min Response", "4.9 Stars", "24/7 Service"] as const).map(
            (stat) => (
              <div
                key={stat}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  padding: "10px 24px",
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {stat}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  );
}
