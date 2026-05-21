import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolioProjectType = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', title: 'Alternative text'}),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})
