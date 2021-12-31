import algoliasearch from 'algoliasearch/lite'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import Results from 'components/search/results'
import Input from 'components/search/by/query'
import MediaTypes from 'components/search/by/type'
import Categories from 'components/search/by/category'
import Subcategories from 'components/search/by/subcategory'

import useParam from '../../hooks/useParam'

// Todo: move algoliaSearch to context
const searchClient = algoliasearch('NG68PAQTGF', '11ca0688316006c41de4ca26626b2330')

export default function Search() {
	const [category] = useParam('category')
	const [subcategory] = useParam('subcategory')

	return (
		<>
			<InstantSearch
				searchClient={searchClient}
				indexName='Resource'
			>
				<form action='#' className='search'> {/* Todo: handle submit */}
					{/*<Config category={category} subcategory={subcategory} />*/}

					<Input />
					<Categories currentRefinement={category} />
					<MediaTypes />
					{ category && <Subcategories currentRefinement={subcategory} /> }
				</form>
				<Results />
			</InstantSearch>
		</>

	)
}

function Config({ category, subcategory }) {
	if (subcategory)
		return <Configure filters={`category:"${category}" AND subcategory:"${subcategory}"`} />
	if (category)
		return <Configure filters={`category:"${category}"`} />

	return null
}
