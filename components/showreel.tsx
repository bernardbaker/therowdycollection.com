"use client";

// import { Button } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
// import styles from "./header.module.css";
import Image from "next/image";

interface Props {
  value: {
    file: string;
    poster: string;
    strapline: string;
    company: string;
    logo: string;
  };
}

export const Showreel = ({ value }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  const handle = () => {
    if (ref.current) {
      ref.current?.play();
      document.body.removeEventListener("click", handle);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handle);

    return () => {
      document.body.removeEventListener("click", handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <video
        src={value.file}
        poster={value.poster}
        className="absolute top-0 left-0 right-0 aspect-video w-full h-[calc(100%+48px)] object-cover rounded-b-2xl"
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
        ref={ref}
        playsInline={true}
      >
        <source src={value.file} type="video/mp4" />
      </video>
      <div className="absolute z-10 flex flex-col justify-center items-center px-2 w-screen h-[calc(100%+48px)]">
        <Image
          alt={`${value.company} logo.`}
          src={value.logo}
          width={300}
          height={100}
          className="grow-0 landscape-max-500:w-[300px] landscape-max-500:mt-14"
          priority
        />
        {(value.strapline || value.company) && (
          <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <h1 className="text-white text-xl font-bold text-center drop-shadow-sm sm:text-4xl landscape-max-500:text-md">
              {value.strapline}
            </h1>
            <span className="text-white text-base font-semibold drop-shadow-sm sm:text-xl text-center mb-4">
              {value.company}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
