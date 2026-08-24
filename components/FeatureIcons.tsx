import type { Feature } from "@/data/content";

const base = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const PATHS: Record<Feature["icon"], React.ReactNode> = {
  dumbbell: <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />,
  apple: (
    <>
      <path d="M12 20a6 6 0 0 0 6-6c0-3.5-2.5-6.5-6-6.5S6 10.5 6 14a6 6 0 0 0 6 6z" />
      <path d="M12 7.5V4M12 4c1.6 0 2.8-1 3-2.5-1.7-.2-2.8.6-3 2.5z" />
    </>
  ),
  pill: (
    <>
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" />
      <path d="M12 8.5v7" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="4" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4M8.5 14h2M13.5 14h2" />
    </>
  ),
  calculator: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="4" />
      <path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" />
    </>
  ),
  chart: <path d="M3 20h18M6.5 20v-6M11.5 20V8M16.5 20v-9" />,
};

export default function FeatureIcon({ name }: { name: Feature["icon"] }) {
  return <svg {...base}>{PATHS[name]}</svg>;
}
