import { connectStateResults } from 'react-instantsearch-dom'

import Hit from 'components/search/hit'

function Hits({ searchResults: results }) {
    if (!results?.hits.length)
        return <p>No results found :(</p>
    
    return (
        <div className="ressources">
            { results.hits.map(({ objectID: id, ...props }) => 
                <Hit key={id} {...props} />)}
        </div>
    )
}

export default connectStateResults(Hits);