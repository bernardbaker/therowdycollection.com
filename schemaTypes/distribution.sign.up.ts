import { defineType, defineField } from "sanity";

export const distributionSignUp = defineType({
  type: "document",
  name: "distributionSignUp",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Distribution sign up content name",
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "The DAD page",
      description: "Pick a page that this will be featured on",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "image",
      name: "logo",
      description: "Logo for the distribution sign up content",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "strapline",
      title: "Distribution sign up content straline displayed next to the logo",
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
      name: "ctas",
      description: "Distribution sign up call to action buttons",
      of: [
        defineField({
          name: "cta",
          type: "reference",
          to: [{ type: "navigation" }],
        }),
      ],
    }),
  ],
});
