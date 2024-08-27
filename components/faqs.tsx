import { Faqs } from "@/sanity/types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Script from "next/script";
import { Content } from "@/components/content";

export const Faq = ({ data }: { data: Faqs[] }) => {
  const list = data[0] as unknown as { faqs: Faqs[]; title: string };
  const addJsonLd = ({ faqs }: { faqs: Faqs[] }) => {
    const arr: string[] = [];
    faqs.forEach((faq: Faqs, index: number) => {
      arr.push(`{
        "@type": "Question",
        "name": "${faq.question}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${faq.answer}"
        }
      }`);
    });
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "FAQs",
        "mainEntity": [
          ${arr.toString()}
        ]
      }`,
    };
  };
  return (
    <div className="flex w-full justify-center md:justify-start bg-transparent my-32 pb-8 px-4 mx-auto sm:px-8">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd({ faqs: list.faqs })}
        key="faq-jsonld"
        id="faqs-jsonld"
      />
      <div className="w-screen flex flex-col items-center gap-3 md:items-start">
        <h2 className="text-left text-3xl font-bold mb-5 text-white w-full md:text-8xl md:w-md">
          {list.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-1 md:gap-x-8 md:gap-y-4 lg:grid-cols-2 lg:grid-rows-2">
          {list.faqs.map((faq: Faqs, index: number) => {
            return (
              <Disclosure
                as="div"
                className="w-full flex flex-col items-center md:items-start"
                defaultOpen={false}
                key={`faq-${index}`}
              >
                <DisclosureButton className="group flex justify-center items-center sm:items-start px-6 pl-8 py-4 rounded-full w-full bg-[rgb(118,249,79)]">
                  <span className="w-full text-center sm:text-left text-1xl font-bold text-black group-data-[hover]:text-black/70">
                    {faq.question}
                  </span>
                </DisclosureButton>
                <DisclosurePanel
                  transition
                  className="origin-top ease-in-out data-[closed]:-translate-y-2 data-[closed]:opacity-0 text-base mt-4 w-full px-8 data-[closed]:animate-delay-500 data-[closed]:duration-100"
                >
                  <Content content={faq.answer} />
                </DisclosurePanel>
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};
