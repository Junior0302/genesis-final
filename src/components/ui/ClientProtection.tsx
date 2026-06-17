"use client";

import { useEffect } from "react";

export default function ClientProtection() {
  useEffect(() => {
    // Front-end deterrence only: this does not fully protect source code.
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isModifier = event.ctrlKey || event.metaKey;
      const isShiftCombo = isModifier && event.shiftKey;

      if (
        key === "f12" ||
        (isShiftCombo && ["i", "j", "c"].includes(key)) ||
        (isModifier && ["u", "s"].includes(key))
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
