import { connectStateResults } from 'react-instantsearch-dom'

import Hit from 'components/search/hit'

function Hits({ searchResults: results }) {
    if (!results?.hits.length)
        return <p>No results found :(</p>
    
    return (
        <ol>
            { results.hits.map(({ objectID: id, ...props }) => 
                <li key={id}><Hit {...props} /></li>) }
        </ol>
    )
}

export default connectStateResults(Hits);