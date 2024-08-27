"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function Page(params: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [pageCss, setPageCss] = useState<string>("bg-white");
  const [mainCss, setMainCss] = useState<string>("translate-y-5");
  const [titleCss, setTitleCss] = useState<string>("translate-y-5");
  const [linksCss, setLinksCss] = useState<string>("translate-y-5");
  const [headerCss, setHeaderCss] = useState<string>("opacity-100");
  const [straplineCss, setStraplineCss] = useState<string>("opacity-100");
  const [captionCss, setCaptionCss] = useState<string>("opacity-100");

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
    };

    if (pathname === "/individual-protocols") {
      setPageCss("bg-black");
      setMainCss("opacity-100 -translate-y-0");
      setTitleCss("opacity-100 -translate-y-0");
      setLinksCss("opacity-100 -translate-y-0");
    }

    if (pendingUrl === "/") {
      setPageCss("bg-white");
      setMainCss("opacity-0 -translate-y-10");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0");
    }

    if (pendingUrl === "/about") {
      setPageCss("bg-white");
      setMainCss("opacity-0 -translate-y-10");
      setStraplineCss("opacity-0 -translate-y-10");
      setCaptionCss("opacity-0 -translate-y-20");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0 -translate-y-10");
    }

    if (pendingUrl === "/individual-protocols") {
      setPageCss("bg-white");
      setMainCss("opacity-0 -translate-y-10");
      setStraplineCss("opacity-0 -translate-y-10");
      setCaptionCss("opacity-0 -translate-y-20");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0 -translate-y-10");
    }

    if (pendingUrl === "/consultations") {
      setPageCss("bg-white");
      setMainCss("opacity-0 -translate-y-10");
      setStraplineCss("opacity-0 -translate-y-10");
      setCaptionCss("opacity-0 -translate-y-20");
      setTitleCss("opacity-0 -translate-y-10");
      setLinksCss("opacity-0 -translate-y-10");
      setHeaderCss("opacity-0 -translate-y-10");
    }
    // This function will be executed:
    // 1. At the first render
    // 2. Whenever the pathname or searchParams change
    handleRouteChange();
  }, [pathname, searchParams, pendingUrl]);

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
        className={`flex flex-col items-center md:flex-row md:justify-between transition-all duration-200 ${headerCss}`}
      >
        <div className="flex flex-col self-start w-full">
          <div>
            <h1 className="text-white font-bold text-[24vw] leading-none -ml-[6px] md:text-8xl">
              PLANTS OVER PILLS
            </h1>
          </div>
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-center md:justify-start md:pt-16 opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-center items-center gap-8 md:flex-row md:items-start md:justify-start">
          <p
            className={`text-white text-left pt-4 md:max-w-64 transition-all duration-500 delay-500 ${captionCss}`}
          >
            WE BELIEVE THAT PLANTS CAN COMBAT THE OPIOID CRISIS INSTEAD OF
            RELYING ON PRESCRIBED PILLS FOR ISSUES LIKE JOINT PAINS, SLEEP
            DISORDERS, TINNITUS, AND MORE. OUR TEAM OF PROFESSIONALS HAS
            CONDUCTED THOROUGH RESEARCH TO DEMONSTRATE THAT PLANTS OFFER
            COMPARABLE, IF NOT SUPERIOR, HEALING PROPERTIES TO PILLS WITH FEWER
            LONG-TERM SIDE EFFECTS.
          </p>
          <h2
            className={`text-white text-5xl font-bold md:text-7xl md:self-end transition-all duration-500 ${straplineCss}`}
          >
            FOR THE DEMANDING LIFE STYLE
          </h2>
        </section>
      </main>
      <footer
        className={`flex flex-col md:flex-row md:justify-between mt-8 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        <Link
          href="https://www.rowdypro.com"
          className="font-bold text-white"
          target="_blank"
        >
          ROWDY PRO
        </Link>
        <Link
          href="/"
          className="font-bold text-white"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="font-bold text-white"
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          ABOUT
        </Link>
        <Link
          href="/consultations"
          className="font-bold text-white"
          onClick={(e) => handleLinkClick(e, "/consultations")}
        >
          CONSULTATIONS
        </Link>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
