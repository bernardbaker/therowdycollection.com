import { defineType, defineField } from "sanity";

export const distributionService = defineType({
  type: "document",
  name: "distributionService",
  fields: [
    defineField({
      type: "string",
      name: "strapline",
      title: "Distribution services strapline",
    }),
    defineField({
      type: "string",
      name: "number",
    }),
    defineField({
      type: "string",
      name: "service",
      title: "Distribution service name",
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
  ],
});
