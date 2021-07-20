import { connectSearchBox } from "react-instantsearch-dom";

function Search({ refine }) {
    return (
        <form action="" role="search">
            <label htmlFor="search">Search articles</label>
            <input
            id='search'
            type='search'
            placeholder="Save the Planet"
            onChange={(e) => refine(e.currentTarget.value)}
            />
        </form>
    )
}

export default connectSearchBox(Search);
