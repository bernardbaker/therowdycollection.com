import { defineType, defineField } from "sanity";

export const video = defineType({
  type: "document",
  name: "video",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Info about this video",
    }),
    defineField({
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "string",
      name: "file",
    }),
    defineField({
      type: "image",
      name: "poster",
      options: { hotspot: true },
    }),
  ],
});
