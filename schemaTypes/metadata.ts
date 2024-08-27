import { defineType, defineField, defineArrayMember } from 'sanity'

export const metadata = defineType({
  type: "object",
  name: "metadata",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "keywords",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});

