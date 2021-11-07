import algoliasearch from 'algoliasearch/lite'
import { Configure, InstantSearch } from 'react-instantsearch-dom'

import Results from 'components/search/results'
import Input from 'components/search/by/query'
import MediaTypes from 'components/search/by/type'
import Categories from 'components/search/by/category'
import Subcategories from 'components/search/by/subcategory'
import Tags from 'components/search/by/tags'

import useParam from '../../hooks/useParam'

// Todo: move algoliaSearch to context
const searchClient = algoliasearch('RI142KT8JI', '025962cc3a90d4f60d0aba72b1b312ed')

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
					<Config category={category} subcategory={subcategory} />
					<Input />
					<MediaTypes />
					{/*{ category ? subcategory ? <Tags /> : <Subcategories /> : <Categories /> }*/}
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
