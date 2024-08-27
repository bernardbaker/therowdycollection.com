import { defineType, defineField, UrlRule } from "sanity";

export const ctaBlock = defineType({
  type: "object",
  name: "ctaBlock",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Call to action title",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "color",
      name: "color",
      title: "Color",
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "Link this to a DAD website page",
      to: [{ type: "page", title: "Page" }],
      hidden: ({ parent, value }) => !value && !!parent?.external,
    }),
    defineField({
      title: "External URL",
      name: "externalUrl",
      type: "url",
      validation: (Rule: UrlRule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      hidden: ({ parent, value }) => !value && !!parent?.internal,
    }),
  ],
});
