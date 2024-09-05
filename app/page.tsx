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
      className={`grow flex flex-col p-4 pt-8 sm:p-10 sm:pt-16 transition-all duration-500 ${pageCss}`}
    >
      <header
        className={`flex flex-col items-start gap-3 md:gap-0 md:flex-row md:justify-between md:items-center ${headerCss}`}
      >
        <div className="flex flex-col">
          <div>
            <h1 className="text-black font-bold text-[24vw] leading-none -ml-[6px] md:text-8xl">
              ROWDY
              <span className="text-black font-thin text-xs align-top relative top-[11px] left-[3px]">
                &reg;
              </span>
            </h1>
          </div>
          <div className="text-right mr-8">
            <span className="text-lg">EST-1992</span>
          </div>
        </div>
        <div>
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            HISTORY
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-start md:items-end landscape-max-500:items-start">
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            THE COLLECTION
          </Link>
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            THE ROWDY RECORDS
          </Link>
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            ROWDY TO WEAR
          </Link>
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            ROWDY PRO
          </Link>
          <Link
            href="#"
            className="font-thin"
            onClick={(e) => handleLinkClick(e, "#")}
            aria-disabled
          >
            ROWDY WELLNESS
          </Link>
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-center md:justify-center md:pb-[10%] opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-center items-center mt-[10%] md:items-center md:mt-0">
          <h2
            className={`text-black font-bold text-[10vw] leading-none tracking-[0.6vw] md:text-[10vw] md:tracking-[0.7vw] opacity-0 transition-all duration-1000 ${titleCss}`}
          >
            DECENTRALIZED
          </h2>
        </section>
      </main>
      <footer
        className={`flex flex-col gap-3 md:flex-row md:justify-between landscape-max-500:mt-7 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        <Link
          href="#"
          className="font-thin"
          onClick={(e) => handleLinkClick(e, "#")}
          aria-disabled
        >
          DON&apos;T TAP OUT
        </Link>
        <Link
          href="#"
          className="font-thin"
          onClick={(e) => handleLinkClick(e, "#")}
          aria-disabled
        >
          A DALLAS AUSTIN COMPANY
        </Link>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
