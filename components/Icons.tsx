type IconProps = { size?: number };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ChevronDown = ({ size = 18 }: IconProps) => (
  <svg data-chev="1" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
    <path d="M5.5 9.5 12 16l6.5-6.5" />
  </svg>
);

export const ChevronLeft = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
);

export const ChevronRight = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
    <path d="M9.5 5.5 16 12l-6.5 6.5" />
  </svg>
);

export const AppleIcon = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.15-2.8.85-3.5.85-.7 0-1.85-.83-3-.81-1.55.02-3 .9-3.8 2.28-1.62 2.8-.41 6.95 1.16 9.23.77 1.11 1.68 2.36 2.88 2.32 1.16-.05 1.6-.75 3-.75s1.8.75 3.02.72c1.25-.02 2.04-1.13 2.8-2.25.88-1.29 1.24-2.54 1.26-2.6-.03-.01-2.42-.93-2.42-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.01.61-2.67 1.37-.59.68-1.1 1.77-.96 2.81 1.02.08 2.06-.52 2.69-1.28z" />
  </svg>
);

export const PlayIcon = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.3 2.6c-.3.3-.5.8-.5 1.4v16c0 .6.2 1.1.5 1.4l.1.1 9-9v-.2l-9-9-.1.3zM16.5 15.2l-3-3 3-3 3.6 2c1 .6 1 1.5 0 2.1l-3.6 1.9zM14.2 13.5L5.4 22.3c.4.4 1 .4 1.7.1l8.6-4.9-1.5-4zM14.2 10.5l1.5-4L7.1 1.6c-.7-.4-1.3-.3-1.7.1l8.8 8.8z" />
  </svg>
);

/** Accent ring + tick used in the pricing feature lists. */
export const CheckMark = ({ muted = false }: { muted?: boolean }) => (
  <span
    style={{
      width: 19, height: 19, borderRadius: 99, flex: "0 0 auto", marginTop: 1,
      fontSize: 11, fontWeight: 800, display: "grid", placeItems: "center",
      border: "1.6px solid " + (muted ? "var(--line2)" : "var(--acc-tx)"),
      color: muted ? "var(--mut)" : "var(--acc-tx)",
    }}
  >
    ✓
  </span>
);
