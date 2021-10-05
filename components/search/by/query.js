import { connectSearchBox } from "react-instantsearch-dom";

function Query({ refine, currentRefinement: query }) {
	return (
		<div className='by query'>
			<input
				name='q'
				type='search'
				placeholder='I have a question about...'
				autoComplete='off'
				value={query}
				onChange={({ target: { value }}) => refine(value)}
			/>
		</div>
	)
}

export default connectSearchBox(Query)
