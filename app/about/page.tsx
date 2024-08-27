"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
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

    if (pathname === "/about") {
      setPageCss("bg-white");
      setMainCss("opacity-100 -translate-y-0");
      setStraplineCss("opacity-100 -translate-y-0");
      setCaptionCss("opacity-100 -translate-y-0");
      setTitleCss("opacity-100 -translate-y-0");
      setLinksCss("opacity-100 -translate-y-0");
      setHeaderCss("opacity-100 -translate-y-0");
    }

    if (pendingUrl === "/") {
      setPageCss("bg-white");
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

    if (pendingUrl === "/individual-protocols") {
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
        className={`flex flex-col items-center transition-all duration-200 ${headerCss}`}
      >
        <div className="flex flex-col self-start w-full">
          <div>
            <h1 className="text-black font-bold text-[24vw] leading-none -ml-[6px] md:text-8xl">
              ABOUT US
            </h1>
          </div>
        </div>
      </header>
      <main
        className={`grow flex flex-col justify-start items-start md:pt-16 opacity-0 transition-all duration-1000 ${mainCss}`}
      >
        <section className="flex flex-col justify-start items-start gap-8 md:flex-row md:items-start md:justify-start">
          <p
            className={`text-black text-left md:max-w-2xl transition-all duration-500 delay-500 ${captionCss}`}
          >
            REBEKAH PERRY IS HIGHLY EDUCATED AS AN MEDICAL CANNABIS THERAPEUTIC
            SPECIALIST AND AN OWNER AND FOUNDER OF ROWDY WELLNESS. SHE IS ALSO
            AN ACCOMPLISHED. HIGHLY DRIVEN CLINICAL EXERCISE PHYSIOLOGIST, WITH
            PRIMARY FOCUS IN NEUROLOGICAL ISSUES (TINNITUS, VERTIFO, DEMENTIA,
            ETC) MENTAL HEALTH (DEPRESSION, ANZIETY, INSOMNIA, ETC.) AND CHRONIC
            PAIN MANAGEMENT. SHE ALSO HOLDS TWO MASTERS DEGREES. ONE FROM
            UNIVERSITY OF MARYLAND PHARAMCY SCHOOL IN MEDICAL CANNABIS SCIENCE &
            THERAPEUTICS AND THE OTHER FROM UNIVERSITY OF GEOGRGIA IN
            KINESIOLOGY, WHERE SHER COMPLETED HER BACHELORS IN NUTRITION WHILE
            SHE WAS ALSO THE CAPTAIN OF THE WOMEN&lquote;S SOCCER TEAM.
            <br />
            <br />
            REBEKAH BELIEVES IN MEDIAL CANNABIS AS A THERAPEUTIC MEDICINE. SHE
            BELIEVES THAT EVERY CHANNGLE DESRVE3S A PATH TO WELLNESS THROUGH
            HOLISTIC HEALING. DURING HER TIME AS AN ELITE ALTHERE SHE SAW THE
            LONG TERM EFFECTS OPIOIDS CAN HAVE ON A PERSON&lquote;S WELLBEING
            AND INSPIRED HER TO PROVIDE AN ALTERNATIVE OPTION. HER PATIENTS AT
            SHEPARD CENTER FUELED HER FIRE TO BECOME A HIGHLY EDUCATED MEDICAL
            CANNABIS THERAPEUTIC SPECIALIST.
            <br />
            <br />
            SHE IS PASSIONATE TO DEVELOP INDIVIDUALIZED TREATMENT PROTOCOLS FOR
            PATIENTS THROUGH EDCUATIONAL MEDICAL CANNABIS CONSULTATIONS.
            <br />
            <br />
            REBEKAH WORKS WITH PATIENTS AND PHYSICAINAS TO EDUCATE ABOUT THE
            BENEFITS OF MEDICAL CANNABIS THERAPEUTICS. AND PROVIDES
            INDIVIDULIZED DOSING FOR PATIENTS. REBEKAH SPEAKS AT MEDICAL
            CONFERENCES AND ON PANELS TO HELP EDUCATE PROVIDERS AND PATIENTS ON
            THE BENEFITS OF UTILIZING CANNABIS MEDICINE AS A THERAPY. SHE SPOKE
            AT THE GEIRGIA WORKERS COMPENSATION ANNUAL EDUCATION CONFERENCE ON
            THE ALTERNATIVE MEDICIN AND CHRONIC PAIN MANAGEMENT, THE
            SOUTHEASTERN HELP AND MEDICAL CANNABIS CONVENTION. AND THE FLORIDA
            ACADEMY OF AUDIOLOGY CONVENTION ON CBD EFFECTS FOR TINNITUS CONTROL.
            PLEASE FIND REBEKAH ON THE DR. KEITH DARROW PODCAST WITH DR. CROSBY
            ON CANNABIS., TINNITUS & AUDIOLOGY HERE{" "}
            <Link href={"https://www.youtube.com/watch?v=8-vfc6e3sio"}>
              HTTPS://WWW.YOUTUBE.COM/WATCH?V=8-VFC6E3SIO
            </Link>
          </p>
          <Image
            src={"/images/PERRYHeadshot.jpg"}
            width={200}
            height={200}
            alt="Picture of Rebekah Perry"
            className="w-full md:w-[400px]"
          />
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
          href="/individual-protocols"
          className="font-bold text-black"
          onClick={(e) => handleLinkClick(e, "/individual-protocols")}
        >
          INDIVIDUAL PROTOCOLS
        </Link>
        <Link
          href="/consultations"
          className="font-bold text-black"
          onClick={(e) => handleLinkClick(e, "/consultations")}
        >
          CONSULTATIONS
        </Link>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
