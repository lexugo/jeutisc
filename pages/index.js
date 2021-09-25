import getCategories from 'services/categories'

import Layout from 'components/layout'
import Search from 'components/search'
import { searchable } from 'components/search/context'

function Home() {
	return (
		<Layout>
			<Search />
		</Layout>
	)
}

export default searchable(Home)

export async function getStaticProps() {
	return {
		props: {
			categories: await getCategories()
		}
	}
}
