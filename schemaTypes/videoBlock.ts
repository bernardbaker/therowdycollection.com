import { defineType, defineField } from "sanity";

export const videoBlock = defineType({
  type: "object",
  name: "videoBlock",
  fields: [
    defineField({
      type: "image",
      name: "logo",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "strapline",
    }),
    defineField({
      type: "string",
      name: "company",
    }),
    defineField({
      type: "file",
      name: "video",
      options: { accept: "video/mp4" },
    }),
    defineField({
      type: "image",
      name: "poster",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "aspectRatio",
      title: "Aspect Ratio",
      options: {
        list: [
          { title: "Desktop - Landscape - 16:9", value: "16:9" },
          { title: "Mobile - Portrait - 16:9", value: "9:16" },
        ],
      },
    }),
  ],
});
