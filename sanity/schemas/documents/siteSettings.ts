import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Shown below the logo (e.g. "501(c)(3) Public Benefit")',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'contactEmail',
      title: 'General Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'foundingYear',
      title: 'Founding Year',
      type: 'number',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'taxStatus',
      title: 'Tax Status',
      type: 'string',
      description: 'e.g. "501(c)(3) Public Benefit Corporation"',
    }),
    defineField({
      name: 'taxId',
      title: 'Tax ID (EIN)',
      type: 'string',
      description: 'Displayed as "Available upon request" if empty.',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{type: 'cta'}],
      description: 'Top nav links in display order.',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
