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

    if (pathname === "/consultations") {
      setPageCss("bg-white");
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
            <h1 className="text-black font-bold text-[12vw] leading-none -ml-[6px] md:text-8xl">
              CONSULTATION
            </h1>
          </div>
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-center gap-8 w-full pt-16 opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col w-full justify-start items-start gap-8">
          <h2
            className={`text-black text-4xl font-bold transition-all duration-500 ${straplineCss}`}
          >
            SPEAK TO ONE OF OUR SPECIALIST
          </h2>
        </section>
        <section className="flex flex-col w-full justify-start items-start gap-8">
          <h2
            className={`text-black text-2xl font-bold transition-all duration-500 ${straplineCss}`}
          >
            INDIVIDUAL PROTOCOL
          </h2>
          <p
            className={`text-black transition-all duration-500 ${straplineCss}`}
          >
            Each of our clients has unique situation that calls for a specific
            protocol for relief.
          </p>
          <h2
            className={`text-black text-2xl font-bold transition-all duration-500 ${straplineCss}`}
          >
            DIRECT PHONE CALL VIDEO CONFERENCE
          </h2>
          <p
            className={`text-black transition-all duration-500 ${straplineCss}`}
          >
            Get direct, scheudled contact from one of our specialists and
            receive consistent follow-ups.
          </p>
          <aside
            className={`text-black text-2xl font-bold transition-all duration-500 ${straplineCss}`}
          >
            BOOK YOURS TODAY //
            <br />
            WWW.ROWDYWELLNESS.COM
            <br />
            <Link
              href="https://www.instagram.com/rowdywellness"
              className="font-bold text-black"
              target="_blank"
            >
              INSTAGRAM // @ROWDYWELLNESS
            </Link>
          </aside>
        </section>
      </main>
      <footer
        className={`flex flex-col md:flex-row md:justify-between mt-8 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        <Link
          href="https://www.rowdypro.com"
          className="font-bold"
          target="_blank"
        >
          ROWDY PRO
        </Link>
        <Link
          href="/"
          className="font-bold text-black"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="font-bold text-black"
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          ABOUT
        </Link>
        <Link
          href="/individual-protocols"
          className="font-bold text-black"
          onClick={(e) => handleLinkClick(e, "/individual-protocols")}
        >
          INDIVIDUAL PROTOCOLS
        </Link>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
