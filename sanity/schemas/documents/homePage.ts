import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      description: 'e.g. "Est. 2024 · California · 501(c)(3)"',
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Hero Primary CTA",
      type: "cta",
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Hero Secondary CTA",
      type: "cta",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Photo",
      type: "editorialImage",
      description:
        "Optional. Landscape 3:2 preferred. Place or terrain. Renders as a full-bleed " +
        "band immediately below the Pine hero, before the Problem section. Omit and the " +
        "band is hidden; hero flows straight into Problem.",
    }),
    defineField({
      name: "heroTocIndex",
      title: "Hero TOC Index",
      type: "string",
      description: 'Numeric index shown beside the hero in-page TOC (e.g. "01").',
    }),
    defineField({
      name: "heroTocLinks",
      title: "Hero TOC Links",
      type: "array",
      of: [{ type: "navItem" }],
      description: "In-page jump links shown in the hero footer (Problem · Programs · Impact · Donate).",
    }),

    // Problem section
    defineField({
      name: "problemHeadline",
      title: "Problem Headline",
      type: "string",
    }),
    defineField({
      name: "problemBodyParagraphs",
      title: "Problem Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),

    // Programs section
    defineField({
      name: "programsSectionEyebrow",
      title: "Programs Eyebrow",
      type: "string",
    }),
    defineField({
      name: "programsSectionHeadline",
      title: "Programs Headline",
      type: "string",
    }),
    defineField({
      name: "programs",
      title: "Programs",
      type: "array",
      of: [{ type: "program" }],
    }),

    // Board section
    defineField({
      name: "boardHeadline",
      title: "Board Headline",
      type: "string",
    }),
    defineField({
      name: "boardSubheadline",
      title: "Board Subheadline",
      type: "text",
      rows: 3,
    }),

    // Impact section
    defineField({
      name: "impactEyebrow",
      title: "Impact Eyebrow",
      type: "string",
    }),
    defineField({
      name: "impactHeadline",
      title: "Impact Headline",
      type: "string",
    }),
    defineField({
      name: "impactSubheadline",
      title: "Impact Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "impactRungs",
      title: "Impact Ladder",
      type: "array",
      of: [{ type: "impactRung" }],
    }),
    defineField({
      name: "impactNote",
      title: "Impact Note",
      type: "text",
      rows: 2,
      description: "Fine-print note below the impact ladder.",
    }),

    // Donate CTA section
    defineField({
      name: "donateCTAEyebrow",
      title: "Donate CTA Eyebrow",
      type: "string",
    }),
    defineField({
      name: "donateCTAHeadline",
      title: "Donate CTA Headline",
      type: "string",
    }),
    defineField({
      name: "donateCTAPrimaryCta",
      title: "Donate CTA Primary Button",
      type: "cta",
    }),
    defineField({
      name: "donateCTASecondaryCta",
      title: "Donate CTA Secondary Button",
      type: "cta",
    }),

    // SEO
    defineField({
      name: "seo",
      title: "Page SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
