import { defineType, defineField } from "sanity";

export const salesPoints = defineType({
  type: "document",
  name: "salesPoints",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Sales points",
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "The DAD page",
      description: "Pick a page that these sales points will be featured on",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "array",
      name: "statements",
      of: [
        defineField({
          name: "statement",
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "artists",
      of: [
        defineField({
          name: "artist",
          type: "reference",
          to: [{ type: "artist" }],
        }),
      ],
    }),
  ],
});
