import { defineType, defineField, defineArrayMember } from "sanity";

export const podcast = defineType({
  type: "document",
  name: "podcast",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "strapline",
    }),
    defineField({
      type: "string",
      name: "detail",
    }),
  ],
});
