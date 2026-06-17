import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Genesis Connect - services informatiques et digitaux";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, rgba(42,28,21,1) 0%, rgba(28,18,13,1) 100%)",
          color: "#FAF9F6",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: "-1px" }}>Genesis Connect</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05 }}>
            Support informatique, creation web, SEO local et AI Search.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(250,249,246,0.75)",
            }}
          >
            Maintenance informatique, installation Wi-Fi, cybersécurité, sauvegarde, cloud et
            accompagnement des petites structures.
          </div>
        </div>
      </div>
    ),
    size
  );
}
