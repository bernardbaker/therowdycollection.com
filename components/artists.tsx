"use client";

import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";

interface Props {
  value: {
    artists: {
      list: {
        name: string;
        image: string;
        url: string;
        link: string;
      }[];
    };
  };
}

export const Artists = ({ value }: Props) => {
  const artistCardsRef = React.useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const addJsonLd = ({ artists }: { artists: any }) => {
    const arr: string[] = [];
    artists.forEach((artist: any) => {
      arr.push(`{
        "@type": "Question",
        "name": "Does DAAD handle distribution for ${artist.name}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes ${artist.name} is registered with DAD."
        }
      }`);
    });
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "FAQs",
        "mainEntity": [
          ${arr.toString()}
        ]
      }`,
    };
  };

  const scrollElementHorizontally = React.useCallback(
    async (direction: "left" | "right") =>
      new Promise((resolve, reject) => {
        const artistCards = artistCardsRef.current;

        if (!artistCards) return;
        if (!document.getElementById("artist-1")) return;

        const distance = document.getElementById("artist-1")!.offsetWidth;
        // console.log("distance", distance);
        const startPosition = artistCards.scrollLeft;
        // console.log("startPosition", startPosition);
        const endPosition =
          direction === "right"
            ? startPosition + distance
            : startPosition - distance;
        // console.log("endPosition", endPosition);
        const maxScrollLeft = artistCards.scrollWidth - artistCards.clientWidth;
        // console.log("maxScrollLeft", maxScrollLeft);

        // Ensure the target position is within the scrollable range
        const targetPosition = Math.min(endPosition, maxScrollLeft);
        // console.log("targetPosition", targetPosition);

        // Disable scrolling on the element
        // artistCards.style.overflowX = "hidden";
        artistCards.scroll({ left: targetPosition, behavior: "smooth" });

        setTimeout(resolve, 1000);
      }),
    []
  );

  const handleWheel = React.useCallback(
    async (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (!isScrolling) {
        setIsScrolling((prev) => {
          prev = true;
          return prev;
        });
        // console.log("!isScrolling");
        const deltaX = event.deltaX;
        const direction = deltaX > 0 ? "right" : "left";
        // console.log("direction", direction);
        await scrollElementHorizontally(direction);
        setIsScrolling(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isScrolling, scrollElementHorizontally]
  );

  useEffect(() => {
    const artistCards = artistCardsRef.current;
    if (!artistCards) return;
    // @ts-expect-error
    artistCards.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      // @ts-expect-error
      artistCards.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-screen px-8 z-10 no-scrollbar horizontal-snap"
      id="artists"
    >
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd({ artists: value?.artists?.list })}
        // schema={faq.schemaMarkup}
        key="artists-jsonld"
        id="artists-jsonld"
      />
      {value?.artists?.list.map((value, index) => {
        return (
          <div
            key={`artist-${index}`}
            className="relative selection:bg-transparent overflow-y-hidden h-[400px]"
            id={`artist-${index}`}
          >
            <div className="absolute z-20 px-8 top-64 flex gap-4 justify-center items-center w-[280px] sm:w-[380px]">
              <Link
                href={value.link}
                target="_blank"
                className="focus:outline-none"
              >
                <p className="text-white font-bold text-left text-xl hover:text-white/70 drop-shadow-sm">
                  {value.name}
                </p>
              </Link>
              <Link
                href={value.link}
                target="_blank"
                className="focus:outline-none"
              >
                <LinkIcon className="size-5 text-white group-data-[hover]:opacity-70 drop-shadow-sm" />
              </Link>
            </div>
            <div className="w-[280px] sm:w-[380px] after:block after:absolute after:top-[50px] after:left-0 after:w-[280px] after:sm:w-[380px] after:h-[350px] after:bg-gradient-to-t after:from-black/90 after:opacity-80 after:rounded-b-3xl">
              <Image
                src={value.image}
                width={300}
                height={500}
                alt={`Picture of ${value.name}`}
                priority
                className="w-[280px] sm:w-[380px] h-[400px] object-cover rounded-3xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
