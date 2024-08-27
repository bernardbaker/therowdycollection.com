import { defineType, defineField, defineArrayMember } from "sanity";

export const navigation = defineType({
  type: "document",
  name: "navigation",
  title: "Navigation",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "array",
      name: "links",
      title: "Links",
      of: [
        defineArrayMember({
          type: "navigationLink",
        }),
      ],
    }),
  ],
});
