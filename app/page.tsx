"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Page(params: any) {
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

    if (pendingUrl === "/individual-protocols") {
      setPageCss("bg-black");
      setMainCss("opacity-0 -translate-y-10");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0");
    }

    if (pendingUrl === "/about") {
      setMainCss("opacity-0 -translate-y-10");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0");
    }

    if (pendingUrl === "/consultations") {
      setPageCss("bg-white");
      setMainCss("opacity-0 -translate-y-10");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0");
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

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    event.preventDefault();
    setPendingUrl(url);
  };

  return (
    <div
      className={`grow flex flex-col p-4 transition-all duration-500 ${pageCss}`}
    >
      <header
        className={`flex flex-col items-center md:flex-row md:justify-between ${headerCss}`}
      >
        <div className="flex flex-col self-start w-full">
          <div>
            <h1 className="text-black font-bold text-[24vw] leading-none -ml-[6px] md:text-8xl">
              ROWDY
              <span className="text-black font-thin text-xs align-top relative top-[11px] left-[3px]">
                &reg;
              </span>
            </h1>
          </div>
          <div className="flex justify-start items-center gap-4">
            <span className="text-[8px]">
              DECENTRALIZED WELLNESS
              <br />
              THAT REPRESENTS AN
              <br />
              EXPERIMENTAL LIFESTYLE.
              <br />
              FOR PROFESSIONAL USE ONLY
            </span>
            <span>33.76,-84.39002774</span>
          </div>
          <div
            className={`-scale-y-100 -scale-x-100 md:text-right md:-ml-[8px] lg:-ml-[10px] xl:-ml-[16px] xxl:-ml-[10px] transition-all duration-1000 ${straplineCss}`}
          >
            <span className="tracking-[0.6vw] text-[10vw] font-bold md:text-4xl landscape-max-500:tracking-[0.94vw] transition-all duration-1000">
              DECENTRALIZED
            </span>
          </div>
        </div>
        <Image
          src="/images/rowdywellness.com.png"
          alt="Rowdy Wellness logo"
          width={130}
          height={130}
          className="w-[200px] h-[200px] md:w-[160px] md:h-[160px]"
        />
      </header>
      <main
        className={`grow flex flex-col justify-start items-center md:justify-center opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-center items-center md:items-start">
          <h2
            className={`text-black font-bold text-[17vw] leading-none tracking-[0.5vw] md:text-[7.5rem] md:tracking-[0.7vw] opacity-0 transition-all duration-1000 ${titleCss}`}
          >
            WELLNESS
          </h2>
          <p className={`text-black text-center`}>
            PROFESSIONAL CONSULTATIONS TO ALTERNATIVE MEDICINES
          </p>
        </section>
      </main>
      <footer
        className={`flex flex-col md:flex-row md:justify-between landscape-max-500:mt-7 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        <Link
          href="https://www.rowdypro.com"
          className="font-bold"
          target="_blank"
        >
          ROWDY PRO
        </Link>
        <Link
          href="/about"
          className="font-bold"
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          ABOUT
        </Link>
        <Link
          href="/consultations"
          className="font-bold"
          onClick={(e) => handleLinkClick(e, "/consultations")}
        >
          CONSULTATIONS
        </Link>
        <Link
          href="/individual-protocols"
          className="font-bold"
          onClick={(e) => handleLinkClick(e, "/individual-protocols")}
        >
          INDIVIDUAL PROTOCOLS
        </Link>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
