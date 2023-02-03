import {defineField, defineType} from 'sanity'
import {FaStar as icon} from 'react-icons/fa'

export default defineType({
  name: 'trending',
  title: 'Trending',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'reference',
      to: [{type: 'movie'} /* , {type: 'series'} */],
    }),
    defineField({
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
    }),
    defineField({
      name: 'classification',
      title: 'Classification',
      type: 'string',
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Movie', value: 'movie'},
          {title: 'TV Serie', value: 'series'},
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mediaTitle: 'media.title',
      mediaType: 'mediaType',
      mediaReleaseYear: 'releaseYear',
      mediaClassification: 'classification',
    },
    prepare(selection) {
      const mediaTitle = selection.mediaTitle || selection.title
      return {
        title: mediaTitle,
        subtitle: `${selection.mediaType} - ${selection.mediaReleaseYear} - ${selection.mediaClassification}`,
      }
    },
  },
})
