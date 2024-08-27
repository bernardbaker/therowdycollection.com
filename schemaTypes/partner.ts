import { defineType, defineField, defineArrayMember } from "sanity";

export const partner = defineType({
  name: "partner",
  type: "document",
  fields: [
    defineField({
      name: "partnerPage",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "string",
      name: "partnerName",
      title: "Name of partner",
    }),
    defineField({
      type: "string",
      name: "statements",
      title: "Short bold statements",
    }),
    defineField({
      type: "string",
      name: "strapline",
      title: "Partner strapline",
    }),
    defineField({
      type: "string",
      name: "detail",
      title: "Partner strapline details",
    }),
    defineField({
      name: "infoCards",
      type: "reference",
      to: [{ type: "infoCard" }],
    }),
    defineField({
      name: "artists",
      type: "reference",
      to: [{ type: "artists" }],
    }),
  ],
});
