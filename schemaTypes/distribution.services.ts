import { defineType, defineField } from "sanity";

export const distributionServices = defineType({
  type: "document",
  name: "distributionServices",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Distribution services name",
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "The DAD page",
      description: "Pick a page that this will be featured on",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "array",
      name: "services",
      of: [
        defineField({
          name: "list",
          type: "reference",
          to: [{ type: "distributionService" }],
        }),
      ],
    }),
  ],
});
