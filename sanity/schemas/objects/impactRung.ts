import { defineField, defineType } from "sanity";

export const impactRung = defineType({
  name: "impactRung",
  title: "Impact Rung",
  type: "object",
  description: "Single donation tier with amount, title, and description body.",
  fields: [
    defineField({
      name: "amount",
      title: "Amount",
      type: "string",
      description: 'Display amount (e.g. "$50", "$2,500")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Bold title line (e.g. "One CPR / AED certification.")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Expanded description of what this amount covers.",
    }),
    defineField({
      name: "image",
      title: "Rung Photo",
      type: "editorialImage",
      description:
        "Optional, used sparingly. At most one or two rungs in the ladder have a photo, " +
        "never all of them. Square 1:1 preferred. People-at-rest or quiet object detail " +
        "(a fixed bike, a helmet, hands on a tool).",
    }),
  ],
  preview: {
    select: { title: "amount", subtitle: "title" },
  },
});
