import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Headline title",
      description: "Display a headline in the header.",
    }),
    defineField({
      name: "logo",
      type: "logoBlock",
    }),
    defineField({
      name: "content",
      type: "headerBlock",
    }),
  ],
});
