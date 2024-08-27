import { defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      description: "Text displayed above the FAQs.",
    },
    {
      name: "faqPage",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "faqs",
      type: "array",
      title: "Frequently asked questions",
      of: [{ type: "faqBlock" }],
    },
  ],
});
