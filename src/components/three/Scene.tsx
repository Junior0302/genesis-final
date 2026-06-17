"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { useTransition } from "@/context/TransitionContext";
import { usePathname } from "next/navigation";
import Model from "./Model";
import Lights from "./Lights";
import { CAMERA_CONFIG } from "./config/cameraSettings";

export default function Scene() {
  const { progress } = useProgress();
  const { setAssetsLoaded } = useTransition();
  const pathname = usePathname();
  // #region debug-point D:scene-runtime
  const reportDebug = useCallback(
    (hypothesisId: string, msg: string, extra?: Record<string, unknown>) => {
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
          pathname,
          extra,
        }),
      }).catch(() => {});
    },
    [pathname]
  );
  // #endregion debug-point D:scene-runtime

  useEffect(() => {
    // Report loading status to TransitionContext
    if (progress === 100) {
      setAssetsLoaded(true);
    }
    // #region debug-point D:scene-progress
    if (progress === 0 || progress === 100) {
      reportDebug("D", "[DEBUG] scene progress checkpoint", {
        progress,
      });
    }
    // #endregion debug-point D:scene-progress
  }, [pathname, progress, reportDebug, setAssetsLoaded]);

  // Only render Scene on Home Page (checking all locales)
  const isHome = pathname === "/" || ["/fr", "/en", "/zh"].includes(pathname);
  useEffect(() => {
    // #region debug-point C:scene-home-gate
    reportDebug("C", "[DEBUG] scene home gate evaluated", {
      isHome,
      pathname,
    });
    // #endregion debug-point C:scene-home-gate
  }, [isHome, pathname, reportDebug]);
  if (!isHome) return null;

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={CAMERA_CONFIG}
      gl={{ antialias: true, alpha: true }}
      className="!fixed !inset-0 !w-full !h-full !z-10 pointer-events-none"
      onCreated={(state) => {
        // #region debug-point D:scene-canvas-created
        reportDebug("D", "[DEBUG] scene canvas created", {
          glPresent: Boolean(state.gl),
          canvasWidth: state.size.width,
          canvasHeight: state.size.height,
        });
        // #endregion debug-point D:scene-canvas-created
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Model />
      </Suspense>
    </Canvas>
  );
}
