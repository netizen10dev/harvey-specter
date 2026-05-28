import { type SchemaTypeDefinition } from 'sanity'

import {portfolioProjectType} from './portfolioProjectType'
import {homepageType}         from './homepageType'
import {aboutType}            from './aboutType'
import {servicesPageType}     from './servicesPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portfolioProjectType,
    homepageType,
    aboutType,
    servicesPageType,
  ],
}
