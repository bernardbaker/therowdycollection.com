"use client";

import { useEffect, useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

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
      <div className="w-[calc(100%-40vw)] overflow-hidden">
        <MuxPlayer
          streamType="on-demand"
          playbackId="AseG6oBcocI6NvTBAO01DEdigQofqYG2MNq01Ir36ppcE"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          autoPlay
          muted={true}
          poster={poster}
          playsInline={true}
          className="h-10 sm:h-20 lg:h-24 xl:h-36 xxl:h-52 xxxl:h-64 landscape-max-500:h-16"
          preload="auto"
          loop={true}
          style={{
            aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
