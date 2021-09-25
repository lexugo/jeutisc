const algoliasearch = require('algoliasearch')

const client = algoliasearch('RI142KT8JI', '025962cc3a90d4f60d0aba72b1b312ed')

export const resources = client.initIndex('Resource')

export const facets = {
    categories: 'category',
    subcategories: 'subcategory',
    tags: 'tags',
    mediaType: 'type'
}
