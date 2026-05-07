import {defineField, defineType} from 'sanity'

export const contactChannel = defineType({
  name: 'contactChannel',
  title: 'Contact Channel',
  type: 'object',
  description: 'A contact entry (e.g. email address or mailing address).',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "General", "Grant questions", "Donations"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'Email address, URL, or plain text.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Optional mailto: or url link.',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'value'},
  },
})
