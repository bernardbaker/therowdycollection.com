import { defineType, defineField, defineArrayMember } from "sanity";

export const contentBlock = defineType({
  type: "object",
  name: "contentBlock",
  title: "Content Block",
  fields: [
    defineField({
      name: "title",
      type: "string",
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
        defineArrayMember({
          type: "reference",
          name: "artists",
          title: "Artists",
          description: "Pick artists that you want featured on this page",
          to: [{ type: "artists" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "cta",
          title: "Pick a set of call to actions",
          to: [{ type: "cta" }],
        }),
        defineArrayMember({
          type: "faq",
        }),
        defineArrayMember({
          type: "reference",
          name: "infoCards",
          title: "Pick a set of info cards",
          to: [{ type: "infoCard" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "partner",
          title: "Pick a partner to be displayed on this page",
          to: [{ type: "partner" }],
        }),
        defineArrayMember({
          type: "navigationLink",
        }),
        defineArrayMember({
          type: "videoBlock",
        }),
        defineArrayMember({
          type: "reference",
          name: "salesPoints",
          title: "Pick sales points to be displayed on this page",
          to: [{ type: "salesPoints" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "distributionSignUp",
          title:
            "Pick distribution sign up content to be displayed on this page",
          to: [{ type: "distributionSignUp" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "distributionPartnerIntroduction",
          title:
            "Pick distribution partner introduction to be displayed on this page",
          to: [{ type: "distributionPartnerIntroduction" }],
        }),
        defineArrayMember({
          type: "youtube",
        }),
        defineArrayMember({
          type: "reference",
          name: "distributionServices",
          title: "Pick distribution services to be displayed on this page",
          to: [{ type: "distributionServices" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "podcast",
          title: "Pick a podcast to be displayed on this page",
          to: [{ type: "podcast" }],
        }),
        defineArrayMember({
          type: "reference",
          name: "socialLinks",
          title: "Pick social links to be displayed on this page",
          to: [{ type: "socialLinks" }],
        }),
      ],
    }),
    defineField({
      type: "color",
      name: "light",
      title: "Background color - light",
    }),
    defineField({
      type: "color",
      name: "dark",
      title: "Background color - dark",
    }),
  ],
});
