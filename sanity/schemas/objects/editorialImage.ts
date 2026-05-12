import { defineField, defineType } from "sanity";

/**
 * editorialImage — shared photo schema for ASSP.
 *
 * Editorial discipline (enforced by description copy, not validation):
 *   • Full-color photojournalism. No filters, no duotones.
 *   • Subjects: people-at-rest, place / terrain. Never mid-action hero shots.
 *   • Aspect: square 1:1 for people slots; landscape 3:2 for hero / place slots.
 *
 * Page-rendering uses only `asset` and `alt`. The other fields are admin /
 * legal metadata: provenance, consent, rights audit. They never appear in
 * the UI by design.
 */
export const editorialImage = defineType({
  name: "editorialImage",
  title: "Editorial Image",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description:
        "Describe what is in the photo for screen readers. " +
        'Voice: knowledgeable friend. E.g. "A rider tightening a chain on a borrowed bike at a school in Bend, Oregon." ' +
        'Not: "Action sports inspire community impact."',
      validation: (rule) => rule.required().max(160),
    }),

    // ── Admin / legal metadata (never rendered on the page) ──
    defineField({
      name: "photographer",
      title: "Photographer",
      type: "string",
      description: "Internal only. Used for rights audits, not displayed.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'Internal only. e.g. "Bend, Oregon".',
    }),
    defineField({
      name: "captureDate",
      title: "Capture Date",
      type: "date",
      description: "Internal only.",
    }),
    defineField({
      name: "consentOnFile",
      title: "Consent on file",
      type: "boolean",
      initialValue: false,
      description:
        "Required true when the photo shows identifiable people. " +
        "If false on a photo with people, do not publish.",
    }),
  ],
  preview: {
    select: { media: "asset", title: "alt", subtitle: "location" },
  },
});
