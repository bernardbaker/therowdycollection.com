import { defineType, defineField, defineArrayMember } from "sanity";

export const distributionPartnerIntroduction = defineType({
  type: "document",
  name: "distributionPartnerIntroduction",
  fields: [
    defineField({
      type: "string",
      name: "description",
      title: "Distribution partner description",
    }),
    defineField({
      type: "string",
      name: "introduction",
      title: "Distribution partner introduction",
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Distribution partner logo",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "strapline",
      title: "Distribution partner strapline displayed below the partner name",
    }),
    defineField({
      type: "array",
      name: "videos",
      of: [
        defineField({
          name: "youtube",
          type: "youtube",
        }),
      ],
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
      description: "Distribution partner call to action buttons",
      of: [
        defineField({
          name: "cta",
          type: "reference",
          to: [{ type: "navigation" }],
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "The DAD page",
      description: "Pick a page that this will be featured on",
      to: [{ type: "page" }],
    }),
  ],
});
