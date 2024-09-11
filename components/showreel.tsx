"use client";

// import { Button } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
// import styles from "./header.module.css";
import Image from "next/image";

interface Props {
  file: string;
  poster: string;
}

export const Showreel = ({ file, poster }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  const handle = () => {
    if (ref.current) {
      ref.current?.play();
      document.body.removeEventListener("click", handle);
    }
  };

  // const onClick = (e: React.MouseEvent<HTMLVideoElement>) => {
  //   e.preventDefault();
  //   if (ref.current) {
  //     if (ref.current.muted) {
  //       ref.current.muted = false;
  //     } else {
  //       ref.current.muted = true;
  //     }
  //   }
  // };

  useEffect(() => {
    document.body.addEventListener("click", handle);

    return () => {
      document.body.removeEventListener("click", handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen flex flex-col items-center">
      <video
        src={file}
        poster={poster}
        className="aspect-video w-[calc(100%-40vw)] object-cover h-10 sm:h-20 lg:h-24 xl:h-36 xxl:h-52 xxxl:h-64 landscape-max-500:h-16"
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
        ref={ref}
        playsInline={true}
      >
        <source src={file} type="video/mp4" />
      </video>
    </div>
  );
};
