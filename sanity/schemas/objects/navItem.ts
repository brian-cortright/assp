import { defineField, defineType } from "sanity";

export const navItem = defineType({
  name: "navItem",
  title: "Nav Link",
  type: "object",
  description: "Simple link with label and href. For footer, in-page TOCs, and other navigation lists where button styling is not used.",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL / Anchor",
      type: "string",
      description: "URL, path, or in-page anchor (e.g. /about, #programs, mailto:info@…)",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
