import { AppleIcon, PlayIcon } from "./Icons";

type Props = { variant?: "default" | "on-accent" };

export default function StoreButtons({ variant = "default" }: Props) {
  const onAccent = variant === "on-accent";

  return (
    <div className="hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <a
        className={onAccent ? "btn" : "btn btn-accent"}
        href="#get"
        style={onAccent ? { background: "var(--ink)", color: "#fff" } : undefined}
      >
        <AppleIcon />
        <span className="btn-label">
          <span>Download on the</span>
          <span>App Store</span>
        </span>
      </a>
      <a
        className={onAccent ? "btn" : "btn btn-ghost"}
        href="#get"
        style={onAccent ? { border: "1.5px solid rgba(10,11,12,.28)", color: "var(--ink)" } : undefined}
      >
        <PlayIcon />
        <span className="btn-label">
          <span>Get it on</span>
          <span>Google Play</span>
        </span>
      </a>
    </div>
  );
}
