import { defineField, defineType } from "sanity";

export const donatePage = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "pageHero",
    }),
    defineField({
      name: "heroPrimaryButtonLabel",
      title: "Hero — Primary button label",
      type: "string",
      description: 'Anchors to the donate form. Defaults to "Give now".',
    }),
    defineField({
      name: "heroSecondaryButtonLabel",
      title: "Hero — Secondary button label",
      type: "string",
      description:
        'Anchors to "Other ways to give". Defaults to "Other ways to give".',
    }),
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
      name: "form",
      title: "Donate form copy",
      type: "formCopy",
    }),
    defineField({
      name: "formUrl",
      title: "Zeffy donation form URL",
      type: "url",
      description:
        "Paste the full Zeffy donation-form URL (e.g. https://www.zeffy.com/en-US/donation-form/...). The site automatically swaps it to the /embed/ path.",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).custom((value) => {
          if (!value) return true;
          return value.includes("zeffy.com")
            ? true
            : "Expected a zeffy.com donation-form URL.";
        }),
    }),
    defineField({
      name: "formTierAmounts",
      title: "Form — Tier amounts (USD)",
      type: "array",
      of: [{ type: "number" }],
      description: "Preset donation amounts shown as pill buttons.",
    }),
    defineField({
      name: "formDefaultTierIndex",
      title: "Form — Default tier index",
      type: "number",
      description:
        "Zero-based index of the tier preselected on load. Defaults to 1 (second tier).",
    }),
    defineField({
      name: "offlineTocHeading",
      title: "Offline — TOC heading",
      type: "string",
      description: 'Defaults to "Other ways to give".',
    }),
    defineField({
      name: "offlineTocLinks",
      title: "Offline — TOC links",
      type: "array",
      of: [{ type: "navItem" }],
      description:
        "Anchors must match h3 ids in How to give (#online, #check, #stock, #match).",
    }),
    defineField({
      name: "howToGiveBody",
      title: "How to Give Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text: online, by check, stock/DAF, employer match.",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer Text",
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
      return { title: "Donate Page" };
    },
  },
});
