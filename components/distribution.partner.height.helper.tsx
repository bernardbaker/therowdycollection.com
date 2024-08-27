"use client";

import { useEffect } from "react";

export const DistributionPartnerHeightHelper = () => {
  const handleResize = () => {
    if (
      document.getElementById("distribution-partner")!.clientHeight >
      document.getElementById("distribution-partner-content")!.clientHeight
    ) {
      document.getElementById("distribution-partner")!.style.height =
        `${document.getElementById("distribution-partner-content")?.clientHeight}px`;
      return;
    }
    document.getElementById("distribution-partner")!.style.height =
      `${document.getElementById("distribution-partner-content")?.clientHeight}px`;
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};
