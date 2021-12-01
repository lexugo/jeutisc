import { connectStateResults } from 'react-instantsearch-dom'

import Result from 'components/search/result'

function Hits({ searchResults: results }) {
	if (!results?.hits.length) return <p>No results found :(</p>

	return (
		<div className="ressources">
			{results.hits.map(({ objectID: id, ...props }) => (
				<Result key={id} {...props} />
			))}
		</div>
	)
}

export default connectStateResults(Hits)
