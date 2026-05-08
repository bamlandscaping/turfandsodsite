"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/bamlandscaping-zohomail/bam-sprinklers-and-landscaping-free-estimate-ca-clone?primary_color=00b922"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
