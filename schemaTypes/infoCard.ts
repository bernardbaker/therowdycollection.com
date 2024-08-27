import { defineType, defineField, defineArrayMember } from "sanity";

export const infoCards = defineType({
  type: "document",
  name: "infoCard",
  title: "Information cards",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Info' card notes",
    }),
    defineField({
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "array",
      name: "cta",
      title: "Information cards",
      of: [
        defineArrayMember({
          type: "infoCardBlock",
        }),
      ],
    }),
  ],
});
