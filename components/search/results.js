import { connectHits } from 'react-instantsearch-core'

import Result from 'components/search/result'

function Results({ hits }) {
	const count = hits.length
		? hits.length > 1
			? `Nous avons trouvé ${hits.length} ressources correspondantes`
			: 'Nous avons trouvé une ressource correspondante'
		: "Nous n'avons trouvé aucune ressources correspondant à votre recherche"
	return (
		<div className="resources">
			<header>
				<p className='count'>{ count }</p>
			</header>
			<div className="results">
				{ hits.map(({ objectID: id, ...props }) => <Result key={id} {...props} />) }
			</div>
		</div>
	)
}

export default connectHits(Results)
