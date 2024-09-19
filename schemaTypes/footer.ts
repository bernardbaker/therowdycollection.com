import { defineField, defineType, defineArrayMember } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "page",
      title: "Which page is this on?",
    }),
    defineField({
      type: "array",
      name: "text",
      title: "Text",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});
