"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Showreel } from "@/components/showreel";
import { Footer, Header, Strapline, Video } from "@/sanity/types";

export default function Page({
  header,
  strapline,
  footer,
  video,
}: {
  header: Header;
  strapline: Strapline;
  footer: Footer;
  video: Video;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [pageCss, setPageCss] = useState<string>("bg-white");
  const [mainCss, setMainCss] = useState<string>("translate-y-5");
  const [titleCss, setTitleCss] = useState<string>("translate-y-5");
  const [linksCss, setLinksCss] = useState<string>("translate-y-5");
  const [headerCss, setHeaderCss] = useState<string>("opacity-100");
  const [straplineCss, setStraplineCss] = useState<string>(
    "opacity-0 scale-y-100 scale-x-100 -translate-x-full"
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
    };

    if (pathname === "/") {
      setMainCss("opacity-100 -translate-y-0");
      setTitleCss("opacity-100 -translate-y-0");
      setLinksCss("opacity-100 -translate-y-0");
      setStraplineCss("opacity-100 -scale-y-100 -scale-x-100 translate-x-0");
    }

    // This function will be executed:
    // 1. At the first render
    // 2. Whenever the pathname or searchParams change
    handleRouteChange();
  }, [pathname, pendingUrl]);

  useEffect(() => {
    if (isTransitioning && pendingUrl) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        router.push(pendingUrl);
        setPendingUrl(null);
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, pendingUrl, router]);

  const straplineNodes = strapline?.title?.split("").map((char, index) => {
    if (strapline.flip.includes(char)) {
      return (
        <span
          key={index}
          className="rotate-180 -scale-x-100 inline-block relative top-[1px] sm:top-[3px] lg:top-[4px] xxl:top-[7px]"
        >
          {char}
        </span>
      );
    } else {
      return <span key={index}>{char}</span>;
    }
  });

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    event.preventDefault();
    setPendingUrl(url);
  };

  return (
    <div
      className={`grow flex flex-col p-4 pt-8 sm:p-10 sm:pt-16 transition-all duration-500 ${pageCss}`}
    >
      <header
        className={`flex flex-col items-start gap-3 md:gap-0 md:flex-row md:justify-between md:items-center ${headerCss}`}
      >
        <div className="flex flex-col">
          <div>
            <h1 className="text-black font-bold leading-none -ml-[6px] text-[23vw] md:text-8xl">
              {header?.title}
              <span className="text-black font-thin text-xs align-top relative top-[11px] left-[3px] landscape-max-500:top-[22px]">
                &reg;
              </span>
            </h1>
          </div>
          <div className="text-right mr-8">
            <span className="text-lg">{header.established}</span>
          </div>
        </div>
        <div className="flex flex-col items-center lg:absolute lg:origin-center lg:left-[50%] lg:-translate-x-2/4">
          {header.linksInTheCenter.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="font-thin text-black"
              aria-disabled
              target={link.internal ? "_self" : "_blank"}
              style={{
                pointerEvents: link.active ? "all" : "none",
                opacity: link.active ? 1 : 0.3,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 items-start md:items-end landscape-max-500:items-start">
          <p className="font-bold">THE COLLECTION</p>
          {header.linksOnTheRight.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="font-thin text-black"
              aria-disabled
              target={link.internal ? "_self" : "_blank"}
              style={{
                pointerEvents: link.active ? "all" : "none",
                opacity: link.active ? 1 : 0.3,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-center md:justify-center md:py-[10%] opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-center items-center mt-[10%] md:items-center md:mt-0">
          <Showreel file={video.file} poster={video.poster} />
          <h2
            className={`text-black text-nowrap font-bold text-[10vw] leading-none tracking-[0.6vw] md:text-[10vw] md:tracking-[0.7vw] opacity-0 transition-all duration-1000 ${titleCss}`}
          >
            {straplineNodes}
          </h2>
        </section>
      </main>
      <footer
        className={`flex flex-col gap-3 md:flex-row md:justify-between landscape-max-500:mt-7 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        {footer.text.map((item, index) => (
          <div key={index} className="font-thin">
            {item}
          </div>
        ))}
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
