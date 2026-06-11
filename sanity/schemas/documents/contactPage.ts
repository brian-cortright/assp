import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "pageHero",
    }),
    defineField({
      name: "channels",
      title: "Contact Channels",
      type: "array",
      of: [{ type: "contactChannel" }],
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
      name: "formHeight",
      title: "Google Form embed height (px)",
      type: "number",
      description: "Defaults to 1500 if blank.",
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "seo",
      title: "Page SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Page" };
    },
  },
});
