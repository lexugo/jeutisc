import { connectSearchBox } from "react-instantsearch-dom";

function Search({ refine, currentRefinement: query }) {
    return (
        <form action="/search" role="search" className="search">
            <input
                id='search'
                type='search'
                name='q'
                value={query}
                onChange={({ target: { value }}) => refine(value)}
            />
        </form>
    )
}

export default connectSearchBox(Search);
