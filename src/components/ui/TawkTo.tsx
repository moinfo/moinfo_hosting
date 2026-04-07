"use client";

import { useEffect } from "react";

export function TawkTo() {
  useEffect(() => {
    const propertyId = "64f07ba4b2d3e13950ed240a";
    const widgetId = "1h95m5vle";

    let script: HTMLScriptElement | null = null;

    const load = () => {
      script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.head.appendChild(script);
    };

    // Defer until browser is idle so Tawk.to doesn't cause CLS or block INP
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(load, { timeout: 5000 });
      return () => {
        cancelIdleCallback(id);
        if (script) document.head.removeChild(script);
      };
    } else {
      const timer = setTimeout(load, 3000);
      return () => {
        clearTimeout(timer);
        if (script) document.head.removeChild(script);
      };
    }
  }, []);

  return null;
}
