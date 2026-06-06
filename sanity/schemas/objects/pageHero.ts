import { defineField, defineType } from "sanity";

export const pageHero = defineType({
  name: "pageHero",
  title: "Page Hero",
  type: "object",
  description: "Compact bark slab hero used on non-home pages.",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      description:
        'Small label above the title (e.g. "About", "Programs", "Legal").',
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lede",
      title: "Lede / Intro",
      type: "text",
      rows: 3,
      description: "Brief intro paragraph displayed beside the title.",
    }),
  ],
});
