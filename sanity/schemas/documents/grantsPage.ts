import { defineField, defineType } from "sanity";

export const grantsPage = defineType({
  name: "grantsPage",
  title: "Grants Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "pageHero",
    }),
    defineField({
      name: "applyButtonLabel",
      title: 'Hero "Apply" button label',
      type: "string",
      description: 'Defaults to "Apply for a grant".',
    }),
    defineField({
      name: "tocHeading",
      title: "In-page TOC heading",
      type: "string",
      description: 'Defaults to "How it works".',
    }),
    defineField({
      name: "tocLinks",
      title: "In-page TOC links",
      type: "array",
      of: [{ type: "navItem" }],
      description:
        "Anchors must match h2 ids in the body or section ids (#eligibility, #approved-courses, #process, #timeline, #apply).",
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Rich text content: eligibility, approved courses, process, timeline, apply.",
    }),
    defineField({
      name: "form",
      title: "Grant form copy",
      type: "formCopy",
    }),
    defineField({
      name: "formUrl",
      title: "Google Form URL",
      type: "url",
      description:
        'Paste the full "viewform" URL from the Google Form share dialog. The site auto-appends embedded=true to strip Google\'s chrome.',
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).custom((value) => {
          if (!value) return true;
          return value.includes("docs.google.com/forms")
            ? true
            : "Expected a docs.google.com/forms URL.";
        }),
    }),
    defineField({
      name: "seo",
      title: "Page SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Grants Page" };
    },
  },
});
