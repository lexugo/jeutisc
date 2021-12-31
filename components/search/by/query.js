import { connectSearchBox } from "react-instantsearch-dom";

function Query({ refine, currentRefinement: query }) {
	function handleReset(e) {
		e.preventDefault()
		refine('')
	}

	return (
		<div className={`by query`}>
			<label htmlFor='q'>J'ai une question sur</label>
			<div className={`${query && 'refined '}query`}>
				<input
					id='q'
					name='q'
					type='search'
					placeholder='...'
					autoComplete='off'
					value={query}
					onChange={({ target: { value }}) => refine(value)}
				/>
				{ query && <button className='clear' onClick={ handleReset } /> }
			</div>
		</div>
	)
}

export default connectSearchBox(Query)
