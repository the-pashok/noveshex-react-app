"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SCREENS } from "@/data/content";
import PhoneFrame from "./PhoneFrame";
import { ChevronLeft, ChevronRight } from "./Icons";

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 40;
/** horizontal step between neighbouring cards, in % of card width */
const STEP = 62;

export default function ScreensSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragX = useRef<number | null>(null);
  const n = SCREENS.length;

  const step = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);

  const pause = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const play = useCallback(() => {
    pause();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => step(1), AUTOPLAY_MS);
  }, [pause, step]);

  useEffect(() => {
    play();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      pause();
    };
  }, [play, pause, step]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
    pause();
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const d = e.clientX - dragX.current;
    if (Math.abs(d) > SWIPE_PX) step(d < 0 ? 1 : -1);
    dragX.current = null;
    play();
  };

  const active = SCREENS[index];

  return (
    <section id="screens" className="section" style={{ overflow: "hidden" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          Screens
        </div>
        <h2 className="h2" style={{ marginBottom: 16 }}>
          Built to be read in a gym
        </h2>
        <p className="lead" style={{ maxWidth: "56ch", margin: "0 auto" }}>
          Big type, one job per screen, and a bottom bar that never moves. Swipe through the app.
        </p>
      </div>

      <div className="container">
        <div
          className="slider"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          <div
            aria-hidden
            style={{
              position: "absolute", left: "50%", top: "6%", width: "min(620px,80vw)", height: "80%",
              transform: "translateX(-50%)", filter: "blur(14px)", pointerEvents: "none",
              background: "radial-gradient(circle, var(--glow), transparent 66%)",
            }}
          />

          {SCREENS.map((s, k) => {
            /* shortest signed distance on the ring, so the carousel wraps both ways */
            let d = k - index;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const a = Math.abs(d);

            return (
              <div
                key={s.src}
                className="slider-item"
                onClick={() => a !== 0 && setIndex(k)}
                aria-hidden={a !== 0}
                style={{
                  transform: "translateX(" + (d * STEP - 50) + "%) scale(" + (1 - a * 0.13).toFixed(3) + ")",
                  opacity: a === 0 ? 1 : a === 1 ? 0.6 : a === 2 ? 0.25 : 0,
                  filter: a === 0 ? "none" : "blur(" + a * 1.6 + "px)",
                  zIndex: 20 - a,
                  pointerEvents: a > 2 ? "none" : "auto",
                  cursor: a === 0 ? "grab" : "pointer",
                }}
              >
                <PhoneFrame src={s.src} alt={s.title} frame={s.src.includes("light") ? "light" : "dark"} />
              </div>
            );
          })}

          <button className="slider-nav desk-only" style={{ left: "max(24px,6vw)" }} onClick={() => step(-1)} aria-label="Previous screen">
            <ChevronLeft />
          </button>
          <button className="slider-nav desk-only" style={{ right: "max(24px,6vw)" }} onClick={() => step(1)} aria-label="Next screen">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="container" style={{ marginTop: "clamp(28px,4vw,44px)", textAlign: "center" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "clamp(22px,2.8vw,30px)", fontWeight: 800, letterSpacing: "-.03em" }}>
          {active.title}
        </h3>
        <p style={{ margin: "0 auto", maxWidth: "52ch", fontSize: 16, lineHeight: 1.5, color: "var(--mut)", minHeight: 48 }}>
          {active.sub}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
          {SCREENS.map((s, k) => (
            <button
              key={s.src}
              className="dot"
              onClick={() => setIndex(k)}
              aria-label={"Show " + s.title}
              aria-current={k === index}
              style={{ width: k === index ? 26 : 8, background: k === index ? "var(--acc)" : "var(--line2)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
