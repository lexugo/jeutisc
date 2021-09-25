import { facets, resources } from 'services/algolia'

export default async function getCategories() {
	const { facetHits: categories } = await resources.searchForFacetValues(facets.categories, '*')

	return normalized(categories)
}

export async function get(category) {
	const { facetHits: subcategories } = await resources.searchForFacetValues(facets.subcategories, '*', {
		filters: `${facets.categories}:"${category}"`
	})

	return {
		label: category,
		subcategories: normalized(subcategories)
	}
}

function normalized(value) {
	if (Array.isArray(value)) return value.map(normalized)
	else return value.value.toLowerCase()
}
