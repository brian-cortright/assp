import {defineField, defineType} from 'sanity'

export const grantsPage = defineType({
  name: 'grantsPage',
  title: 'Grants Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'pageHero',
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Rich text content: eligibility, approved courses, process, timeline, apply.',
    }),
    defineField({
      name: 'approvedCourses',
      title: 'Approved Courses',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'certification'}]}],
      description: 'Certifications eligible for grants.',
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Grants Page'}
    },
  },
})
