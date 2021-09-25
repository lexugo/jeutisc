import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import Results from 'components/search/results'
import Input from 'components/search/by/query'
import Types from 'components/search/by/type'
import Categories from 'components/search/by/category'
import Subcategories from 'components/search/by/subcategory'
import Tags from 'components/search/by/tags'


import useParam from 'hooks/useParam'

// Todo: move algoliaSearch to context
const searchClient = algoliasearch('RI142KT8JI', '025962cc3a90d4f60d0aba72b1b312ed')

export default function Search() {
	const [category] = useParam('category')
	const [subcategory] = useParam('subcategory')

	console.log(category, subcategory)
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName='Resource'
		>
			<form className='search'>
				<Input />
				<Types />
				{ subcategory ? <Tags /> : category ? <Subcategories /> : <Categories /> }
			</form>
			<Results />
		</InstantSearch>
	)
}
