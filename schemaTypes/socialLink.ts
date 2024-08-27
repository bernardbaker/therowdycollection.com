import { defineType, defineField } from "sanity";

export const socialLink = defineType({
  type: "object",
  name: "socialLink",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "url",
      name: "url",
    }),
    defineField({
      type: "image",
      name: "icon",
    }),
  ],
});
