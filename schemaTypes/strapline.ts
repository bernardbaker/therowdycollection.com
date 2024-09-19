import { defineType, defineField, defineArrayMember } from "sanity";

export const strapline = defineType({
  type: "document",
  name: "strapline",
  title: "Strapline with flipped character",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Strapline below the video",
    }),
    defineField({
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "array",
      name: "flip",
      title: "Flipped characters",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});
