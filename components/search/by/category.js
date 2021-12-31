import { useCategories } from 'hooks/useSearch'

import Link from 'components/link'

function Categories({ currentRefinement: refinement }) {
	const categories = useCategories()

	return (
		<div className='by categories'>
			<p>Je veux en savoir plus à propos de</p>
			<div className='categories'>
				{ categories?.map(category =>
					<Category key={category} label={category} refined={category === refinement} />)
				}
			</div>
		</div>
	)
}

function Category({ label, refined }) {
	return (
		<Link href={`/${label}`} className={(refined ? 'refined ' : '') + 'category'}>
			<h3 className='title'>{ label }</h3>
			<p className='description'>
				Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.
			</p>
		</Link>
	)
}

export default Categories
