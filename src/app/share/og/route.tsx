import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { parseShare, SHARE_MODE_NAMES } from "@/features/share/share-data";

// Result card image for WhatsApp / social previews, drawn in the ink-block style.
// Satori needs every element with children to be a flex container.
const CREAM = "#F9F8E3";
const CARD = "#FBFAEA";
const INK = "#181816";
const EDGE = "#204640";
const FOREST = "#085447";
const LAVENDER = "#EBCCFF";

export function GET(request: NextRequest) {
  const data = parseShare(Object.fromEntries(request.nextUrl.searchParams));
  if (!data) return new Response("Not found", { status: 404 });
  const pct = Math.round((data.score / data.total) * 100);
  const heading = `${data.subjectName} · ${SHARE_MODE_NAMES[data.mode]}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: CREAM, padding: 40 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: `6px solid ${EDGE}`,
            borderRadius: 18,
            background: CARD,
            padding: "40px 48px",
            color: INK,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                width: 64,
                height: 64,
                border: `5px solid ${EDGE}`,
                borderRadius: 12,
              }}
            >
              <div style={{ display: "flex", width: 8, height: 18, borderRadius: 4, background: INK }} />
              <div style={{ display: "flex", width: 8, height: 32, borderRadius: 4, background: INK }} />
              <div style={{ display: "flex", width: 8, height: 24, borderRadius: 4, background: INK }} />
            </div>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>StudyFlow</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: FOREST }}>
              {heading}
            </div>
            {data.topicTitle ? (
              <div style={{ display: "flex", fontSize: 32, opacity: 0.8 }}>{data.topicTitle}</div>
            ) : null}
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <div style={{ display: "flex", fontSize: 150, fontWeight: 700, lineHeight: 1 }}>{String(data.score)}</div>
              <div style={{ display: "flex", fontSize: 64, opacity: 0.55 }}>{`/ ${data.total}`}</div>
            </div>
            <div style={{ display: "flex", width: "100%", height: 18, borderRadius: 9, background: "#E5E3CF", overflow: "hidden" }}>
              <div style={{ display: "flex", width: `${pct}%`, height: "100%", background: FOREST }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: 30 }}>{`${pct}% correct`}</div>
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                border: `5px solid ${EDGE}`,
                borderRadius: 12,
                background: LAVENDER,
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Practice free on StudyFlow →
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
