import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "object",
  description:
    "A numbered program block (e.g. Tuition Grants, On-site Training).",
  fields: [
    defineField({
      name: "number",
      title: "Program Number",
      type: "string",
      description: 'Display number (e.g. "01", "02")',
    }),
    defineField({
      name: "label",
      title: "Short Label",
      type: "string",
      description: 'Subtitle next to the number (e.g. "Tuition grants")',
    }),
    defineField({
      name: "title",
      title: "Program Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyParagraphs",
      title: "Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "metaTags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "string" }],
      description:
        'Bullet tags below the body (e.g. "EMT-Basic", "Free for community events").',
    }),
    defineField({
      name: "image",
      title: "Program Photo",
      type: "editorialImage",
      description:
        "Optional. Square 1:1 preferred. People-at-rest in context (working on gear, " +
        "talking with a coach, post-ride, helmet on). Avoid mid-action hero shots.",
    }),
    defineField({
      name: "cta",
      title: "Program CTA",
      type: "cta",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "label" },
  },
});
