import { defineType, defineField, defineArrayMember } from "sanity";

export const cta = defineType({
  type: "document",
  name: "cta",
  title: "Call To Actions",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Call to action notes",
    }),
    defineField({
      type: "array",
      name: "cta",
      title: "CTAs",
      of: [
        defineArrayMember({
          type: "ctaBlock",
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "Link these to a DAD website page",
      to: [{ type: "page", title: "Page" }],
    }),
  ],
});
