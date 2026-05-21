import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'author', type: 'string'}),
    defineField({name: 'quote', type: 'text', rows: 4}),
    defineField({
      name: 'logo',
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
    select: {title: 'author', media: 'logo'},
  },
})
