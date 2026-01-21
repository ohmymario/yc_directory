import { defineField, defineType } from 'sanity';

export const startup = defineType({
  name: 'startup',
  title: 'Startup',
  type: 'document',
  // icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required().error('Author is required'),
    }),
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) => Rule.min(1).max(20).required().error('Category is required'),
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'pitch',
      type: 'markdown',
      validation: (Rule) => Rule.required().error('Pitch is required'),
    }),
  ],
})