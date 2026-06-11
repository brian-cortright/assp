import { defineField, defineType } from "sanity";

/**
 * Shared editorial copy for the inline donate / grant forms. Field labels
 * (Name, Email, Discipline, etc.) and validation messages stay in the
 * component because they are intrinsic to the form's accessibility
 * contract, not editorial.
 */
export const formCopy = defineType({
  name: "formCopy",
  title: "Form Copy",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: 'Mono kicker above the heading (e.g. "Donate", "Apply").',
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lede",
      title: "Lede",
      type: "text",
      rows: 3,
      description: "Short prose under the heading.",
    }),
    defineField({
      name: "requiredNote",
      title: "Required-fields note",
      type: "string",
      description:
        'Small line under the lede (e.g. "All fields below are required.").',
    }),
    defineField({
      name: "fineprint",
      title: "Fineprint",
      type: "text",
      rows: 2,
      description: "Small note next to / under the submit button.",
    }),
  ],
});
