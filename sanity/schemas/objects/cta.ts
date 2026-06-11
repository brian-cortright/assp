import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "Call to Action",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link URL",
      type: "string",
      description: "URL or path (e.g. /donate, /grants, #programs)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Button Style",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Outline (on Pine)", value: "outline" },
          { title: "Outline (on Sand)", value: "outline-sand" },
          { title: "Primary (Terracotta)", value: "primary" },
          { title: "Ghost", value: "ghost" },
        ],
      },
      initialValue: "primary",
    }),
    defineField({
      name: "external",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
