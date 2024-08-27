import { defineType, defineField, defineArrayMember } from 'sanity'

export const blogPost = defineType({
  type: "document",
  name: "blogPost",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "metadata",
      name: "metadata",
    }),
    defineField({
      type: "boolean",
      name: "isPublished",
    }),
    defineField({
      type: "array",
      name: "authors",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "author" }],
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "categories",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "category" }],
        }),
      ],
    }),
  ],
});

