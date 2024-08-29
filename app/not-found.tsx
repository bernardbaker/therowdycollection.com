import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`grow flex flex-col p-4`}>
      {/* <header
        className={`flex flex-col items-center md:flex-row md:justify-between`}
      >
        <div className="flex flex-col self-start w-full">
          <div>
            <Link href="/">
              <h1 className="text-black font-bold text-[24vw] leading-none -ml-[6px] md:text-8xl">
                ROWDY
                <span className="text-black font-thin text-xs align-top relative top-[11px] left-[3px]">
                  &reg;
                </span>
              </h1>
            </Link>
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
            className={`-scale-y-100 -scale-x-100 md:text-right md:-ml-[8px] lg:-ml-[10px] xl:-ml-[16px] xxl:-ml-[10px] transition-all duration-1000`}
          >
            <span className="tracking-[0.6vw] text-[10vw] font-bold md:text-4xl landscape-max-500:tracking-[0.94vw] transition-all duration-1000">
              DECENTRALIZED
            </span>
          </div>
        </div>
        <Link href="/">
          <Image
            src="/images/therowdycollection.com.png"
            alt="The Rowdy Collection logo"
            width={160}
            height={160}
            className="w-[200px] h-[200px] md:w-[160px] md:h-[160px]"
          />
        </Link>
      </header> */}
      <main className="flex flex-col grow overflow-hidden justify-center items-center">
        <Link href="/">
          <Image
            src="/images/therowdycollection.com.png"
            alt="The Rowdy Collection logo"
            width={160}
            height={160}
            className="w-[200px] h-[200px] md:w-[160px] md:h-[160px]"
          />
        </Link>
        <h1 className="text-2xl font-thin text-black">PAGE NOT FOUND</h1>
      </main>
      {/* <footer
        className={`flex flex-col md:flex-row md:justify-between landscape-max-500:mt-7`}
      >
        <Link
          href="https://www.rowdypro.com"
          className="font-bold"
          target="_blank"
        >
          ROWDY PRO
        </Link>
        <Link href="/" className="font-bold">
          HOME
        </Link>
        <Link href="/about" className="font-bold">
          ABOUT
        </Link>
        <Link href="/consultations" className="font-bold">
          CONSULTATIONS
        </Link>
        <Link href="/individual-protocols" className="font-bold">
          INDIVIDUAL PROTOCOLS
        </Link>
      </footer> */}
    </div>
  );
}
