import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "copyrightName",
      title: "Copyright name",
    }),
    defineField({
      type: "string",
      name: "copyrightMessage",
      title: "Copyright Message",
    }),
    defineField({
      name: "logo",
      type: "logoBlock",
    }),
    defineField({
      name: "content",
      type: "footerBlock",
    }),
  ],
});
