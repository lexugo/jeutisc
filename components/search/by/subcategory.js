import useParam from 'hooks/useParam'
import { useSubcategories } from 'hooks/useSearch'

import Link from 'components/link'

export default function Subcategories({ currentRefinement: refinement }) {
	const subcategories = useSubcategories()

	return (
		<div className='by subcategories'>
            <p>Plus précisement, je veux en apprendre sur</p>
			<div className='subcategories'>
				{ subcategories.map(category =>
					<Subcategory key={category} label={category} refined={category === refinement} />)
				}
			</div>
		</div>
	)
}

function Subcategory({ label, refined }) {
	const [category] = useParam('category') // Todo: refactor category links

	return (
		<Link href={`/${category}/${label}`} className={(refined ? 'refined ' : '') + 'subcategory' } >
			<h3 className='title'>{ label }</h3>
			<p className='description'>Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.</p>
		</Link>
	)
}
