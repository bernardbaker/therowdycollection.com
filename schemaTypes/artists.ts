import { defineType, defineField, defineArrayMember } from "sanity";

export const artists = defineType({
  type: "document",
  name: "artists",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Artists",
    }),
    defineField({
      type: "array",
      name: "artists",
      of: [
        defineField({
          name: "artist",
          type: "reference",
          to: [{ type: "artist" }],
        }),
      ],
    }),
  ],
});
