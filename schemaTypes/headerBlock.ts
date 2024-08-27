import { defineType, defineField, defineArrayMember } from "sanity";

export const headerBlock = defineType({
  name: "headerBlock",
  title: "Header content",
  type: "object",
  fields: [
    defineField({
      name: "socials",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
    defineField({
      name: "navigation",
      type: "reference",
      to: [{ type: "navigation" }],
    }),
    defineField({
      name: "cta",
      type: "reference",
      to: [{ type: "navigation" }],
    }),
  ],
});
