import { connectStateResults } from 'react-instantsearch-dom'

function Hits({ searchResults: results }) {
    if (!results?.hits.length)
        return <p>No results found :(</p>
    
    return (
        <ol>
            { results.hits.map(({ objectID: id, title}) => (
                <li key={id}>{ title }</li>
            )) }
        </ol>
    )
}

export default connectStateResults(Hits);