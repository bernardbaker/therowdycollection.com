"use client";

import { Workbox } from "workbox-window";
import { useEffect } from "react";

export const ServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      const wb = new Workbox("/sw.js");

      wb.register();
    }
  }, []);

  return null;
};
