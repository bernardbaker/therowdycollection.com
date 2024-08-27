import { defineType } from "sanity";

export const logoBlock = defineType({
  name: "logoBlock",
  title: "Company logo",
  type: "object",
  fields: [
    {
      title: "Light DAD logo",
      name: "light",
      description: "The DAD logo for the light theme.",
      type: "image",
    },
    {
      title: "Dark DAD logo",
      name: "dark",
      description: "The DAD logo for the dark theme.",
      type: "image",
    },
  ],
});
