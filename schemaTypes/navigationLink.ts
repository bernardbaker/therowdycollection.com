import { defineType, defineField, UrlRule } from "sanity";

export const navigationLink = defineType({
  type: "object",
  name: "navigationLink",
  fields: [
    defineField({
      type: "string",
      name: "label",
      title: "Text shown in the link.",
    }),
    defineField({
      type: "reference",
      name: "internal",
      title: "Link to website page",
      to: [{ type: "page", title: "Page" }],
    }),
    defineField({
      title: "Internal URL",
      name: "internalUrl",
      type: "string",
    }),
    defineField({
      title: "External URL",
      name: "externalUrl",
      type: "url",
      validation: (Rule: UrlRule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      title: "Active",
      name: "active",
      type: "boolean",
      initialValue: true,
      description: "Display on website",
    }),
  ],
});
