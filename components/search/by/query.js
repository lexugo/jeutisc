import { connectSearchBox } from "react-instantsearch-dom";

function Query({ refine, currentRefinement: query }) {
	function handleReset(e) {
		e.preventDefault()
		refine('')
	}

	return (
		<div className={`by ${query && 'refined '}query`}>
			<input
				name='q'
				type='search'
				placeholder='I have a question about...'
				autoComplete='off'
				value={query}
				onChange={({ target: { value }}) => refine(value)}
			/>
			{ query && <input type='reset' onClick={ handleReset } /> }
		</div>
	)
}

export default connectSearchBox(Query)
