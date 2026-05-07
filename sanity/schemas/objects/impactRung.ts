import {defineField, defineType} from 'sanity'

export const impactRung = defineType({
  name: 'impactRung',
  title: 'Impact Rung',
  type: 'object',
  description: 'Single donation tier with amount, title, and description body.',
  fields: [
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
      description: 'Display amount (e.g. "$50", "$2,500")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Bold title line (e.g. "One CPR / AED certification.")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Expanded description of what this amount covers.',
    }),
  ],
  preview: {
    select: {title: 'amount', subtitle: 'title'},
  },
})
