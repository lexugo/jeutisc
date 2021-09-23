import { connectHits } from 'react-instantsearch-core'

import Result from 'components/search/result'

function Results({ hits }) {
	return (
		<div className="resources">
			{ hits.map(({ objectID: id, ...props }) => <Result key={id} {...props} />) }
		</div>
	)
}

export default connectHits(Results)
