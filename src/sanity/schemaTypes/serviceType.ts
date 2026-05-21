import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', title: 'Alternative text'}),
      ],
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
