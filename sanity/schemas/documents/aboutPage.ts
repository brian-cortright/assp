import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "pageHero",
    }),
    defineField({
      name: "missionBody",
      title: "Our Mission",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text content for the mission section.",
    }),
    defineField({
      name: "originBody",
      title: "Origin",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "valuesBody",
      title: "What We Believe",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "governanceBody",
      title: "Governance",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "boardHeadline",
      title: "Board Headline",
      type: "string",
      description:
        "Optional override for the board section title (defaults to “Board of directors”).",
    }),
    defineField({
      name: "boardSubheadline",
      title: "Board Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "seo",
      title: "Page SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
