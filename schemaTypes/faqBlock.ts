import { defineType } from "sanity";

export const faqBlock = defineType({
  name: "faqBlock",
  title: "Question",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "question",
      description: "The FAQ",
      type: "string",
    },
    {
      title: "Sub heading",
      name: "answer",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
