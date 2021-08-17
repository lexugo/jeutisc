const algoliasearch = require('algoliasearch')

const client = algoliasearch("RI142KT8JI", "025962cc3a90d4f60d0aba72b1b312ed")
const ressources = client.initIndex("Ressource")

export async function getCategories() {
    const { facetHits: categories } = await ressources.searchForFacetValues('category')
    
    return categories.map(category => category.value)
}

export async function getTags(category) {
    const { facetHits: tags } = await ressources.searchForFacetValues('tags', '*', {
        filters: `category:"${category ?? '*'}"` 
    })

    return tags.map(tag => tag.value)
}

export async function getFacets() { // Todo: rename
    const categories = await getCategories()
    const tags = await Promise.all(categories.map(category => getTags(category)))

    return categories.map((category, index) => ({
        label: category,
        items: tags[index]
    }))
}
