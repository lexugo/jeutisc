import { connectHits } from 'react-instantsearch-core'

import Result from 'components/search/result'

function Results({ hits }) {
	return (
		<div className="resources">
			<p className='count'>We found {hits.length} resources</p>
			{ hits.map(({ objectID: id, ...props }) => <Result key={id} {...props} />) }
		</div>
	)
}

export default connectHits(Results)
