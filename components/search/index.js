import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import { useRouter } from 'next/router'

import Input from './search'
import Hits from './hits'

import useParam from 'hooks/useParam'

const searchClient = algoliasearch("RI142KT8JI", "025962cc3a90d4f60d0aba72b1b312ed")

function Search() {
    const [query, setQuery] = useParam('q')

    return (
        <InstantSearch 
            searchClient={searchClient} 
            indexName="Ressource"
            onSearchStateChange={({ query }) => setQuery(query)}
            searchState={{query}}
        >
            <Input />
            <Hits />
        </InstantSearch>
    )
}

export default Search