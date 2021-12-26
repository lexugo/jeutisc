import getCategories, { get as getCategory } from 'services/categories'

import Layout from 'components/layout'
import Search from 'components/search'
import { searchable } from 'components/search/context'

function Subcategory() {
	return (
		<Layout>
			<Search />
		</Layout>
	)
}

export default searchable(Subcategory)

export async function getStaticProps({ params: { category, subcategory } }) {
	const categories = await getCategories()
	const { subcategories } = await getCategory(category)

	return {
		props: {
			category,
			subcategory,
			categories,
			subcategories
		}
	}
}

export async function getStaticPaths() {
	const categories = await getCategories()
	let subcategories = await Promise.all(categories.map(category => getCategory(category)))

	const paths = subcategories.reduce((paths, { label: category, subcategories }) =>
		[...paths, ...subcategories.map(subcategory => ({ params: { category, subcategory }}))], [])
	return { paths, fallback: false }
}
