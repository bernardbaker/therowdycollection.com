"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Loading as LoadingMessage } from "@/components/loading";

export default function Loading() {
  const pathname = usePathname();
  const [loadingBackgroundColor, setLoadingBackgroundColor] = useState("");
  const [loadingImageFilter, setLoadingImageFilter] = useState("");
  const [loadingTextColor, setLoadingTextColor] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setLoadingBackgroundColor("rgb(255,255,255)");
        setLoadingImageFilter("invert(0)");
        setLoadingTextColor("rgb(0,0,0)");
        break;
      case "/about":
        setLoadingBackgroundColor("rgb(255,255,255)");
        setLoadingImageFilter("invert(0)");
        setLoadingTextColor("rgb(0,0,0)");
        break;
      case "/consultations":
        setLoadingBackgroundColor("rgb(255,255,255)");
        setLoadingImageFilter("invert(0)");
        setLoadingTextColor("rgb(0,0,0)");
        break;
      case "/individual-protocols":
        setLoadingBackgroundColor("rgb(0,0,0)");
        setLoadingImageFilter("invert(1)");
        setLoadingTextColor("rgb(255,255,255)");
        break;
      default:
        setLoadingBackgroundColor("rgb(255,255,255)");
        setLoadingImageFilter("invert(0)");
        setLoadingTextColor("rgb(0,0,0)");
        break;
    }
  }, [pathname]);

  return (
    <LoadingMessage
      bg={loadingBackgroundColor}
      filter={loadingImageFilter}
      text={loadingTextColor}
    />
  );
}
