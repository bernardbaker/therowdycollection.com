"use client";

import { useEffect } from "react";

export const useSmoothScrollTo = (targetHash = null) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = targetHash || window.location.hash;

    if (!hash) return;

    const headerOffset = 0;

    // Only proceed if target is a single hash tag
    const startWithHashRegex = /^#\w+/g;
    if (!startWithHashRegex.test(hash)) return;

    let target = document.querySelectorAll(`${hash}`)[0];

    if (!target) return;

    let { top, height } = target.getBoundingClientRect();

    // if scrolling down - center the image based on the view port height
    let middle = window.innerHeight / 2;
    const offset = height / 2;
    top = middle += offset;

    const elementPosition = top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, [targetHash]);
};

export const ScrollToBookmark = (targetHash: any) => {
  useSmoothScrollTo(targetHash);
  return null;
};
