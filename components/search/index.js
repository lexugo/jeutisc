import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import Results from 'components/search/results'
import Input from 'components/search/by/query'
import Types from 'components/search/by/type'
import Categories from 'components/search/by/category'

// Todo: move algoliaSearch to context
const searchClient = algoliasearch("RI142KT8JI", "025962cc3a90d4f60d0aba72b1b312ed")

export default function Search() {
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName='Resource'
		>
			<form className='search'>
				<Input />
				<Types />
				<Categories />
			</form>
			<Results />
		</InstantSearch>
	)
}
