import getCategories, { get as getCategory } from 'services/categories'

import Layout from 'components/layout'
import Search from 'components/search'
import { searchable } from 'components/search/context'

function Category() {
	return (
		<Layout>
			<Search />
		</Layout>
	)
}

export default searchable(Category)

export async function getStaticProps({ params: { category } }) {
	const { subcategories } = await getCategory(category)

	return {
		props: {
			category,
			subcategories
		}
	}
}

export async function getStaticPaths() {
	const categories = await getCategories()

	const paths = categories.map(category => ({ params: { category }}))
	return { paths, fallback: false }
}
