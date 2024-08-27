import { defineArrayMember, defineField, defineType } from "sanity";

export const socialLinks = defineType({
  name: "socialLinks",
  title: "Social links",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "socials",
      type: "array",
      of: [
        defineArrayMember({
          type: "socialLink",
        }),
      ],
    }),
  ],
});
