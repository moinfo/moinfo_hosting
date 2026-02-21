"use client";

import { useEffect } from "react";

export function TawkTo() {
  useEffect(() => {
    const propertyId = "64f07ba4b2d3e13950ed240a";
    const widgetId = "1h95m5vle";

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
