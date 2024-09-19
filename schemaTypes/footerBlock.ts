import { defineType, defineField, defineArrayMember } from "sanity";

export const footerBlock = defineType({
  name: "footerBlock",
  title: "Footer",
  type: "object",
  fields: [
    defineField({
      name: "navigation",
      type: "reference",
      to: [{ type: "navigation" }],
    }),
  ],
});
