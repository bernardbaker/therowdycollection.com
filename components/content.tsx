import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/outline";
import { AnimatedBackground } from "./animated.background";
import { ArtistsContainer } from "./artists.container";
import { Showreel } from "./showreel";
import styles from "./sign.up.module.css";
import socialLinkStyles from "./social.links.module.css";
import partnerIntroductionStyles from "./partner.introduction.module.css";
import { Button } from "@headlessui/react";
import { DistributionPartnerHeightHelper } from "./distribution.partner.height.helper";

const components: PortableTextComponents = {
  types: {
    // TODO: Create different types of images.
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <div
          className="w-full max-w-5xl"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          <Image src={value.url} alt={value.caption} width={100} height={60} />
        </div>
      );
    },
    artist: ({ value }) => {
      return (
        <section
          className="relative selection:bg-transparent"
          key={`artist-${value.artist.name.toString().split(" ").join()}`}
        >
          <div className="absolute z-20 px-8 bottom-12 flex justify-between items-center w-full">
            <Link
              href={`/${value.artist.url}`}
              target="_blank"
              className="focus:outline-none"
            >
              <p className="text-white font-bold text-left">
                {value.artist.name}
              </p>
            </Link>
            <Link
              href={`/${value.artist.url}`}
              target="_blank"
              className="focus:outline-none"
            >
              <div className="border-2 border-white bg-white/30 p-3 rounded-2xl">
                <PlayIcon className="size-5 text-white group-data-[hover]:opacity-70 animate-delay-500 " />
              </div>
            </Link>
          </div>
          <div className="w-[320px] sm:w-[380px] lg:block after:block after:absolute after:bottom-0 after:left-0 after:w-[320px] after:sm:w-[380px] after:h-[400px] after:bg-gradient-to-t after:from-black/90 after:opacity-80 after:rounded-b-3xl">
            <Image
              src={value.artist.image}
              width={300}
              height={500}
              alt={`Picture of ${value.artist.name}`}
              priority
              className="w-[320px] sm:w-[380px] h-[470px] object-cover rounded-3xl"
            />
          </div>
        </section>
      );
    },
    ctaBlock: ({ value }) => {
      return (
        <section
          className={`w-[300px] flex flex-col gap-5 mb-8 font-bold`}
          data-aos="fade-up"
          data-aos-delay="1300"
          key={`cta-${value.title.toString().split(" ").join()}`}
        >
          {/* TODO: evaluate if the link is internal */}
          <Link href={value.url} target="_blank">
            <div
              className={`border-4 px-5 py-2`}
              style={{ borderColor: value.color }}
            >
              <p
                className="text-white text-center"
                style={{ color: value.color }}
              >
                {value.title}
              </p>
            </div>
          </Link>
          <div>
            <p className="text-white text-center">{value.description}</p>
          </div>
        </section>
      );
    },
    infoCardBlock: ({ value }) => {
      return (
        <div
          className={`w-max py-3 px-5 rounded-full`}
          style={{ backgroundColor: value.borderColor }}
        >
          <p className="font-light" style={{ color: value.titleColor }}>
            {value.title}
          </p>
        </div>
      );
    },
    partner: ({ value }) => {
      return (
        <div id="partner" className="w-screen lg:mt-16 overflow-visible">
          {/* <AnimatedBackground id="partner" /> */}
          <div className="flex-grow">
            <div
              id="content"
              className="flex flex-col justify-start items-center"
            >
              {/* <h1 className="text-2xl font-bold text-white text-left py-20 sm:text-3xl md:text-5xl  ">
                {value.partnerName}
              </h1>
              <span className="text-[14px] text-green-500 drop-shadow-md px-2">
                {value.statements}
              </span>
              <h2 className="text-center text-2xl text-white px-1 pt-4 pb-8 max-w-3xl sm:text-3xl md:text-5xl  ">
                {value.strapline}
              </h2>
              <span className="text-center text-base text-slate-400 px-1 pt-4 pb-8 max-w-3xl  ">
                {value.detail}
              </span> */}
              {/* <div className="flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto">
                {value?.infoCards?.list?.map((item, index) => (
                  <div
                    className={`w-max py-3 px-5 rounded-full`}
                    style={{ backgroundColor: item.borderColor }}
                    key={`info-point-${index}`}
                  >
                    <p
                      className="font-light"
                      style={{ color: item.titleColor }}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div> */}
              <ArtistsContainer value={value} />
            </div>
          </div>
        </div>
      );
    },
    videoBlock: ({ value }) => <Showreel value={value} />,
    salesPoints: ({ value }) => {
      return (
        <div
          className={`flex flex-col px-2 py-24 w-screen max-h-min gap-16 lg:flex-row lg:px-10`}
        >
          <div
            className={`flex flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-18 lg:flex-col `}
          >
            {value.statements.map((text: string, index: number) => {
              return (
                <div
                  key={`statement-${index}`}
                  className={`flex justify-center lg:w-full lg:justify-start `}
                >
                  <h3 className="text-left text-2xl font-bold uppercase leading-none w-full sm:w-[unset] sm:text-left sm:text-[3vw] md:text-[4.1vw]">
                    {text}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center lg:ml-auto">
            <div className="relative selection:bg-transparent mx-auto h-max">
              <div className="flex w-[300px] sm:w-[380px] lg:w-[600px] lg:h-[700px] after:block after:absolute after:bottom-0 after:left-0 after:w-[300px] after:sm:w-[380px] after:lg:w-[600px] after:h-[400px] after:lg:h-[700px] after:bg-gradient-to-t after:from-black/90 after:opacity-80 after:rounded-b-3xl">
                <div className="absolute z-20 flex flex-col justify-center items-center w-[300px] sm:w-[380px] lg:w-[600px] bottom-16">
                  {/* <Link
                  href={`/${value.artists[0].url}`}
                  target="_self"
                  className="focus:outline-none pointer-events-none"
                > */}
                  <p className="text-white font-bold text-left text-xl lg:text-4xl">
                    {value.artists[0].name}
                  </p>
                  {/* </Link> */}
                  {/* <Link
                  href={`/${value.artists[0].url}`}
                  target="_self"
                  className="focus:outline-none pointer-events-none"
                >
                  <div className="border-2 border-white bg-white/30 p-3 rounded-2xl">
                    <PlayIcon className="size-5 text-white group-data-[hover]:opacity-70 animate-delay-500 " />
                  </div>
                </Link> */}
                </div>
                <Image
                  src={value.artists[0].image}
                  width={300}
                  height={500}
                  alt={`Picture of ${value.artists[0].name}`}
                  priority
                  className="w-[300px] h-[470px] sm:w-[380px] lg:w-[600px] lg:h-[700px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      );
    },
    distributionSignUp: ({ value }) => {
      return (
        <div
          className={`flex flex-col px-2 py-16 w-screen max-h-min gap-16 lg:px-10 lg:py-24`}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-center">
            <Image
              src={value.logo}
              width={300}
              height={200}
              alt={`Company logo`}
              priority
              className="w-[300px] sm:w-[380px] lg:w-[600px] object-cover"
            />
            <div className={`flex justify-center lg:w-full lg:justify-start `}>
              <h3 className="text-center text-2xl font-bold uppercase leading-none sm:text-[3vw] xl:text-4xl ">
                {value.strapline}
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-center">
            <div
              className={`flex flex-col gap-8 sm:gap-16 md:gap-10 lg:gap-18 lg:ml-auto md:max-w-3xl xl:max-w-5xl `}
            >
              {value.statements.map((text: string, index: number) => {
                return (
                  <div
                    key={`sign-up-statement-${index}`}
                    className="flex justify-start lg:w-full"
                  >
                    <h3 className="text-left sm:text-left text-2xl font-bold uppercase leading-none">
                      {text}
                    </h3>
                  </div>
                );
              })}
            </div>
            {/*  */}
            <div className="flex flex-col justify-center items-center gap-6 max-w-2xl w-full h-full">
              {/* @ts-expect-error unknown shape of data */}
              {value.ctas.map((item, index) => (
                <Link
                  key={`cta-signup-link-${index}`}
                  href={item.internal ? `/${item.url}` : item.link}
                  target={!item.internal ? "_blank" : "_self"}
                  className={`${styles.link} ${item.active ? "pointer-events-auto" : "opacity-50 pointer-events-none"} uppercase font-bold`}
                >
                  <Button className={styles.button} aria-label={item.label}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    },
    distributionPartnerIntroduction: ({ value }) => {
      return (
        <div
          id="distribution-partner"
          className="relative w-screen h-min rounded-t-3xl"
        >
          <AnimatedBackground id="distribution-partner" />
          <div
            id="distribution-partner-content"
            className={`absolute top-0 flex flex-col px-2 py-16 w-screen max-h-min gap-16 lg:px-10 lg:py-24`}
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div>
                <div className="w-full">
                  <h3 className="text-left text-2xl font-bold leading-none sm:text-[3vw] xl:text-4xl ">
                    {value.introduction}
                  </h3>
                </div>
                <Image
                  src={value.logo}
                  width={300}
                  height={200}
                  alt={`Partner logo`}
                  priority
                  className="w-[300px] sm:w-[380px] lg:w-[600px] object-cover"
                />
                <div className="w-full">
                  <h4 className="text-left text-1xl font-bold leading-none sm:text-[3vw] xl:text-4xl ">
                    {value.strapline}
                  </h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-center">
              <div
                className={`flex flex-col gap-8 sm:gap-16 md:gap-10 lg:gap-18 lg:ml-auto md:max-w-3xl xl:max-w-5xl `}
              >
                {value.statements.map((text: string, index: number) => {
                  return (
                    <div
                      key={`sign-up-statement-${index}`}
                      className={`flex justify-start lg:w-full`}
                    >
                      <h3 className="text-left text-2xl font-bold leading-none">
                        {text}
                      </h3>
                    </div>
                  );
                })}
              </div>
              <DistributionPartnerHeightHelper />
              {/*  */}
              <div className="flex flex-col justify-center items-center gap-6 max-w-2xl h-full w-full">
                {/* @ts-expect-error unknown shape of data */}
                {value.ctas.map((item, index) => (
                  <Link
                    key={`cta-signup-link-${index}`}
                    href={item.internal ? `/${item.url}` : item.link}
                    target={!item.internal ? "_blank" : "_self"}
                    className={`${partnerIntroductionStyles.link} ${item.active ? "pointer-events-auto" : "opacity-50 pointer-events-none"} drop-shadow-sm font-bold`}
                  >
                    <Button
                      className={partnerIntroductionStyles.button}
                      aria-label={item.label}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    },
    distributionServices: ({ value }) => {
      return (
        <div id="distribution-services" className="w-screen h-min">
          <div
            id="distribution-services-content"
            className={`flex flex-col px-4 pt-16 w-screen gap-16 lg:px-10 lg:pt-24`}
          >
            {/* @ts-expect-error unknown shape of data */}
            {value.services.map((service, index) => {
              return (
                <div
                  className="flex flex-col gap-4 sm:flex-row"
                  key={`service-description-${index}`}
                >
                  <div className={`w-full lg:pr-30`}>
                    <h3 className="text-left text-2xl font-bold sm:text-3xl lg:text-7xl !leading-[0.8] lg:tracking-[-0.2rem]">
                      {service.strapline}
                    </h3>
                  </div>
                  <div className={`flex`}>
                    <h4 className="text-left text-2xl font-bold leading-none mr-4 lg:leading-[0.8] lg:text-4xl xl:text-6xl xl:leading-[0.8]">
                      {service.number}
                    </h4>
                    <div className="w-[280px]">
                      <h4 className="text-left text-1xl font-bold leading-none xl:text-2xl">
                        {service.service}
                      </h4>
                      {service.statements.map((text: string, index: number) => {
                        return (
                          <div
                            key={`service-statement-${index}`}
                            className={`flex w-full`}
                          >
                            <h3 className="text-left text-1xl font-thin leading-none lg:text-2xl">
                              {text}
                            </h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    },
    podcast: ({ value }) => {
      return (
        <div
          className={`flex flex-col px-4 pt-16 w-screen gap-8 md:gap-16 lg:px-10 lg:pt-24`}
        >
          <div className="w-full">
            <h3 className="text-left text-3xl font-bold leading-none md:text-8xl">
              {value.title}
            </h3>
          </div>
          <div className="flex flex-col items-start gap-8 md:gap-16 md:flex-row md:justify-start md:items-start">
            <Image
              src={value.image}
              width={600}
              height={600}
              alt="Podcast image"
              className="w-[300px] h-[300px] rounded-lg lg:w-[500px] lg:h-[500px]"
            />
            <div className="flex flex-col gap-8 lg:gap-16">
              <h3 className="text-left text-xl font-bold leading-none lg:text-2xl">
                {value.strapline}
              </h3>
              <h4 className="text-left text-xl font-thin leading-none lg:text-2xl">
                {value.detail}
              </h4>
            </div>
          </div>
        </div>
      );
    },
    socialLinks: ({ value }) => {
      return (
        <div
          className={`flex flex-col px-4 pt-16 w-screen gap-8 md:gap-16 lg:px-10 lg:pt-24`}
        >
          <div className="w-full">
            <h3 className="text-left text-3xl font-bold leading-none md:text-8xl">
              {value.title}
            </h3>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-16 w-full h-full">
              {/* @ts-expect-error unknown shape of data */}
              {value.links.map((item, index) => (
                <Link
                  key={`social-link-${index}`}
                  href={item.url}
                  target={"_blank"}
                  className={`${socialLinkStyles.link} uppercase font-bold`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    },
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <div
        data-aos="fade-down"
        data-aos-delay="0"
        className="w-full max-w-5xl"
        key={`h1-${Math.random() * 1000}`}
      >
        <h1 className="text-4xl font-bold text-white w-full sm:text-5xl md:text-7xl  ">
          {children}
        </h1>
      </div>
    ),
    h2: ({ children }) => (
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        className="w-full sm:pb-3 max-w-5xl"
        key={`h2-${Math.random() * 1000}`}
      >
        <h2 className="text-3xl font-bold text-white text-left pt-32 pb-8 sm:text-4xl md:text-6xl  ">
          {children}
        </h2>
      </div>
    ),
    h3: ({ children }) => (
      <div
        data-aos="fade-up"
        data-aos-delay="1600"
        key={`h3-${Math.random() * 1000}`}
      >
        <h3 className="text-2xl font-bold text-white w-full text-center py-32 sm:text-3xl md:text-5xl  ">
          {children}
        </h3>
      </div>
    ),
    normal: ({ children }) => (
      <div
        data-aos="fade-in"
        data-aos-delay="400"
        className="w-full pb-8 max-w-5xl"
        key={`normal-${Math.random() * 1000}`}
      >
        <p className="text-lg font-normal text-white sm:text-xl  ">
          {children}
        </p>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};

// @ts-expect-error
export const CtaContent = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

// @ts-expect-error
export const Content = ({ content }) => {
  return <PortableText value={content} components={components} />;
};
