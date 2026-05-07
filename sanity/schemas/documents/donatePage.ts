import {defineField, defineType} from 'sanity'

export const donatePage = defineType({
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'pageHero',
    }),
    defineField({
      name: 'impactEyebrow',
      title: 'Impact Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'impactHeadline',
      title: 'Impact Headline',
      type: 'string',
    }),
    defineField({
      name: 'impactSubheadline',
      title: 'Impact Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'impactRungs',
      title: 'Impact Ladder',
      type: 'array',
      of: [{type: 'impactRung'}],
    }),
    defineField({
      name: 'howToGiveBody',
      title: 'How to Give Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Rich text: online, by check, stock/DAF, employer match.',
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Donate Page'}
    },
  },
})
