import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Cowgenic — Pakistan's First & Only Native AI Smart Cow Neck Collar System";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadCowIconDataUrl(): Promise<string> {
  const iconBuffer = await readFile(
    path.join(process.cwd(), "public", "images", "cowgenic-cow-icon.png"),
  );
  return `data:image/png;base64,${iconBuffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const cowIconSrc = await loadCowIconDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0b241d 0%, #103b2c 52%, #185e46 100%)",
          color: "#ffffff",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Brand Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cowIconSrc}
              alt="Cowgenic icon"
              width={64}
              height={64}
              style={{ borderRadius: "16px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Cowgenic
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#a7f3d0",
                  fontWeight: 600,
                }}
              >
                Digital Farm Management System
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#FF7A00",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Pakistan&apos;s Native AI Collar
          </div>
        </div>

        {/* Center Hero Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
            }}
          >
            Smart Cow Neck Collar System for Modern Dairy Farms
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#d1fae5",
              fontWeight: 500,
            }}
          >
            Real-time Eating Time, Rumination, Activity Tracking, Heat
            Detection, Exact Insemination Timing &amp; Theft Alerts.
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#ecfdf5",
          }}
        >
          <div style={{ display: "flex", gap: "28px", fontWeight: 700 }}>
            <span>24/7 Live Monitoring</span>
            <span>|</span>
            <span>Up to 2KM Range</span>
            <span>|</span>
            <span>Up to 5 Years Battery</span>
          </div>
          <div style={{ display: "flex", color: "#6ee7b7", fontWeight: 700 }}>
            Lahore, Pakistan
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

