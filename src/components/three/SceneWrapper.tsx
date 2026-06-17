"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[-1] bg-[#2A1C15]" />,
});

export default function SceneWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // #region debug-point C:scene-wrapper-gate
    const reportDebug = (hypothesisId: string, msg: string, extra?: Record<string, unknown>) => {
      const url = process.env.NEXT_PUBLIC_DEBUG_SERVER_URL;
      if (!url) return;
      void fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: "mobile-nav-3d",
          runId: "post-fix",
          hypothesisId,
          msg,
          extra,
        }),
      }).catch(() => {});
    };
    // #endregion debug-point C:scene-wrapper-gate
    const update = () => {
      const nextEnabled = !reducedMotionMq.matches;
      setEnabled(nextEnabled);
      reportDebug("C", "[DEBUG] scene wrapper media gate evaluated", {
        enabled: nextEnabled,
        minWidthMatch: window.innerWidth >= 768,
        reducedMotion: reducedMotionMq.matches,
        width: window.innerWidth,
        height: window.innerHeight,
        userAgent: navigator.userAgent,
      });
    };
    update();

    if (typeof reducedMotionMq.addEventListener === "function") {
      reducedMotionMq.addEventListener("change", update);
      return () => {
        reducedMotionMq.removeEventListener("change", update);
      };
    }

    reducedMotionMq.addListener(update);
    return () => {
      reducedMotionMq.removeListener(update);
    };
  }, []);

  if (!enabled) {
    return <div className="fixed inset-0 z-[-1] bg-[#2A1C15]" />;
  }

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-[#2A1C15]" />
      <Scene />
    </>
  );
}
