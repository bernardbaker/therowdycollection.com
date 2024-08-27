import { defineType, defineField, defineArrayMember } from "sanity";

export const artist = defineType({
  type: "document",
  name: "artist",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "array",
      name: "bio",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "social",
      of: [
        defineArrayMember({
          type: "socialLink",
        }),
      ],
    }),
  ],
});
