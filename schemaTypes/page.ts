import { defineType, defineField, defineArrayMember } from "sanity";

export const page = defineType({
  type: "document",
  name: "page",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Page URL",
      description: "The URL path for this page (e.g. /about)",
      validation: (Rule) => Rule.required(),
      options: { source: "title" },
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "contentBlock",
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
      name: "navigation",
      of: [
        defineArrayMember({
          type: "navigationLink",
        }),
      ],
    }),
  ],
});
