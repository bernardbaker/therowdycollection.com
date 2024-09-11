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

    if (pathname === "/legacy") {
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
        {/* <div>
          <Link
            href="#"
            className="font-thin text-black/30 pointer-events-none"
            aria-disabled
          >
            LEGACY
          </Link>
        </div> */}
        <div className="flex flex-col gap-3 items-start md:items-end landscape-max-500:items-start">
          <Link href="/" className="font-thin">
            THE COLLECTION
          </Link>
          <Link
            href="https://www.rowdyrecords.com"
            className="font-thin"
            target="_blank"
          >
            THE ROWDY RECORDS
          </Link>
          <Link
            href="https://www.rowdyshop.com"
            className="font-thin text-black"
            aria-disabled
          >
            ROWDY SHOP
          </Link>
          <Link
            href="https://www.rowdypro.com"
            className="font-thin"
            target="_blank"
          >
            ROWDY PRO
          </Link>
          <Link
            href="https://www.rowdywellness.com"
            className="font-thin"
            target="_blank"
          >
            ROWDY WELLNESS
          </Link>
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-center md:justify-center md:pb-[10%] opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-center gap-6 py-20 md:py-0">
          <p className="text-black font-thin">
            Rowdy Records, founded by Dallas Austin and LA Reid in 1992, is a
            record label that played a significant role in shaping the sound of
            1990s R&B and hip-hop. Dallas Austin, a Grammy Award-winning
            producer and songwriter, launched the label under the larger
            umbrella of Arista Records, which was managed by Clive Davis.
            Austin&apos;s vision was to create a platform for emerging urban
            talent, and Rowdy Records became known for its fresh and
            experimental sound.
          </p>
          <h2 className="text-black font-bold">
            1990s: The Rise of Rowdy Records
          </h2>
          <h2 className="text-black font-bold">Early Success </h2>
          <p className="text-black font-thin">
            Rowdy Records gained traction in the mid-1990s, releasing a variety
            of R&B and hip-hop projects. The label’s first big success came with
            the group Illegal, a duo made up of rappers Jamal and Malik, who
            achieved moderate success in the early &apos;90s. Around this time,
            Rowdy also signed artists like For Real and Fishbone, expanding the
            label&pos;s roster with different musical styles, including
            alternative and rock-infused acts.
          </p>
          <h2 className="text-black font-bold">Monica&apos;s Breakthrough </h2>
          <p className="text-black font-thin">
            One of Rowdy&apos;s biggest achievements came with the discovery and
            development of Monica, who was only 14 years old when she was signed
            to the label. Her debut album, Miss Thang (1995), became a major
            success, producing hit singles like &quot;Don&apos;t Take It
            Personal (Just One of Dem Days)&quot; and &quot;Before You Walk Out
            of My Life.&quot; Monica&apos;s early success helped cement Rowdy
            Records&apos; reputation as a key player in the R&B scene during
            this period.
          </p>
          <h2 className="text-black font-bold">Collaborations and Influence</h2>
          <p className="text-black font-thin">
            Throughout the 1990s, Rowdy Records was instrumental in fostering
            relationships between established and up-and-coming artists. Dallas
            Austin, through Rowdy, worked with major figures in the music
            industry such as TLC, Boyz II Men, and Madonna, further expanding
            the label&apos;s influence.
          </p>
          <h2 className="text-black font-bold">
            2000s: Transition and Decline
          </h2>
          <h2 className="text-black font-bold">Shift to Motown Records</h2>
          <p className="text-black font-thin">
            In the late 1990s, Dallas Austin shifted focus and took on a senior
            role at Motown Records, causing Rowdy Records to lose some momentum.
            The label saw fewer major releases during this period, and
            Austin&apos;s attention was divided between Rowdy and other
            ventures. Despite the decline in Rowdy&apos;s visibility, Austin
            continued his work as a producer, crafting hits for other major
            artists.
          </p>
          <h2 className="text-black font-bold">Re-launch in the 2000s</h2>
          <p className="text-black font-thin">
            In the early 2000s, Rowdy Records was re-launched, with the
            intention of adapting to the changing music industry. The label
            signed new acts, including Da BackWudz, a hip-hop duo from Atlanta.
            While this marked an effort to revitalize the label, it did not
            achieve the same level of commercial success as in the previous
            decade.
          </p>
          <h2 className="text-black font-bold">
            2010s: New Ventures and Legacy
          </h2>
          <h2 className="text-black font-bold">Independent Operations </h2>
          <p className="text-black font-thin">
            In the 2010s, Rowdy Records operated more independently, with Dallas
            Austin continuing to manage it while also focusing on his production
            career. Although Rowdy did not maintain the same mainstream presence
            as in its peak years, it remained an influential part of the music
            industry, known for its contributions to the careers of artists like
            Monica and its innovative approach to urban music.
          </p>
          <h2 className="text-black font-bold">2020s: Current Status</h2>
          <p className="text-black font-thin">
            As of the 2020s, Rowdy Records continues to exist as a smaller,
            independent label distributed through Dallas Austin Distribution
            remains active in the music business, expanding into various
            ventures outside of the label, including clothing and alternative
            medicines``. Rowdy&apos;s legacy, however, is largely defined by its
            impact in the 1990s, especially within the realms of R&B and
            hip-hop. The label has become a symbol of innovation in the creative
            music landscape, particularly through Austin&apos;s creative vision
            and production prowess.
          </p>
          <p className="text-black font-thin">
            The label&apos;s ability to launch the careers of artists like
            Monica and to push the boundaries of urban music in the 1990s
            ensures its lasting influence in the music industry including new
            artist like Dalby, Jonny Apollo and Dalico.
          </p>
        </section>
      </main>
      <footer
        className={`flex flex-col gap-3 md:flex-row md:justify-between landscape-max-500:mt-7 opacity-0 transition-all duration-1000 ${linksCss}`}
      >
        <Link
          href="#"
          className="font-thin text-black/30 pointer-events-none"
          aria-disabled
        >
          DON&apos;T TAP OUT
        </Link>
        <div className="font-thin">A DALLAS AUSTIN COMPANY</div>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
