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
      name: "established",
      type: "string",
    }),
    defineField({
      type: "reference",
      name: "internal",
      title: "Link to website page",
      to: [{ type: "page", title: "Page" }],
    }),
    defineField({
      name: "linksInTheCenter",
      type: "array",
      of: [{ type: "navigationLink" }],
    }),
    defineField({
      name: "linksOnTheRight",
      type: "array",
      of: [{ type: "navigationLink" }],
    }),
  ],
});
