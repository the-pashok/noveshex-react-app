import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Noveshex — training, nutrition and recovery in one app",
  description:
    "Noveshex plans your training, counts your macros, keeps supplements and schedules on track, and turns the whole week into numbers you can read. iOS and Android.",
  openGraph: {
    title: "Noveshex — your whole protocol, in one app",
    description: "Training, nutrition, vitamins, protocols and progress — one app, light or dark.",
    type: "website",
    images: ["/og-image.png"],
  },
  icons: { icon: "/icons/logo-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
