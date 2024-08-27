import { defineType, defineField } from "sanity";

export const infoCardBlock = defineType({
  type: "object",
  name: "infoCardBlock",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "color",
      name: "titleColor",
      title: "Title color",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "color",
      name: "descriptionColor",
      title: "Description color",
    }),
    defineField({
      type: "color",
      name: "borderColor",
      title: "Border color",
    }),
  ],
});
