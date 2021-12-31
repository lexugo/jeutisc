import { connectHits } from 'react-instantsearch-core'

import Result from 'components/search/result'

function Results({ hits }) {
	return (
		<div className="resources">
			<header>
				<p className='count'>Nous avons trouvé {hits.length} ressources</p>
			</header>
			<div className="results">
				{ hits.map(({ objectID: id, ...props }) => <Result key={id} {...props} />) }
			</div>
		</div>
	)
}

export default connectHits(Results)
