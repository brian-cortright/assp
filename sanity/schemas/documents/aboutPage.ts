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
      name: "tocHeading",
      title: "In-page TOC heading",
      type: "string",
      description: 'Defaults to "On this page".',
    }),
    defineField({
      name: "tocLinks",
      title: "In-page TOC links",
      type: "array",
      of: [{ type: "navItem" }],
      description: "Sidebar links. Anchors must match the section ids on the page (#mission, #origin, #values, #governance, #board).",
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
      name: "boardEyebrow",
      title: "Board Eyebrow",
      type: "string",
      description: 'Mono kicker above the board headline. Defaults to "Who we are".',
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
