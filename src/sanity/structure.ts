import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('H.Studio')
    .items([
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('portfolioProject').title('Portfolio Projects'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.divider(),
      S.documentTypeListItem('post').title('News Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
    ])
