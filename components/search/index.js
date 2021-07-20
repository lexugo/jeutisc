import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import Input from './search'
import Hits from './hits'

const searchClient = algoliasearch("RI142KT8JI", "025962cc3a90d4f60d0aba72b1b312ed")

function Search() {
    return (
        <InstantSearch 
            searchClient={searchClient} 
            indexName="Ressource"
        >
            <Input />
            <Hits />
        </InstantSearch>
    )
}

export default Search