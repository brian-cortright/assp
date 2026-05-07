import {defineField, defineType} from 'sanity'

export const programsPage = defineType({
  name: 'programsPage',
  title: 'Programs Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'pageHero',
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [{type: 'program'}],
    }),
    defineField({
      name: 'donateCTAEyebrow',
      title: 'Donate CTA Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'donateCTAHeadline',
      title: 'Donate CTA Headline',
      type: 'string',
    }),
    defineField({
      name: 'donateCTACta',
      title: 'Donate CTA Button',
      type: 'cta',
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Programs Page'}
    },
  },
})
