import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import Input from './search'
import Hits from './hits'
import Filters from './filters'

import useParam from 'hooks/useParam'

const searchClient = algoliasearch("RI142KT8JI", "025962cc3a90d4f60d0aba72b1b312ed")

function Search({ category, tag }) {
    const [query, setQuery] = useParam('q')

    // Todo: use resultState for SSR
    return (
        <InstantSearch 
            searchClient={searchClient} 
            indexName="Ressource"
            onSearchStateChange={({ query }) => setQuery(query)}
            searchState={{query}}
        >
            <header>
                <div className="logo">
                    <h1><a href="/">Jeutisc</a></h1>
                </div>
                <Input />
                <Filters category={category} tag={tag} />
            </header>
            <Hits />
        </InstantSearch>
    )
}


export default Search