import { ALGOLIA_APP_ID as appId, ALGOLIA_SEARCH_API_KEY as apiKey } from 'services/secrets'

const algoliasearch = require('algoliasearch')

export const client = algoliasearch(appId, apiKey)

export const resources = client.initIndex('Resource')

export const facets = {
    categories: 'category',
    subcategories: 'subcategory',
    mediaType: 'type'
}
