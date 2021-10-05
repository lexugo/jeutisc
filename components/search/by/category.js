import { useCategories } from 'hooks/useSearch'

import { Configure } from 'react-instantsearch-dom'
import Link from 'components/link'
import useParam from '../../../hooks/useParam'

function Categories() {
	const categories = useCategories()

	return (
		<div className='by categories'>
			<div className='categories'>
				{ categories?.map(category =>
					<Category key={category} label={category} onClick={() => console.log('click')} />)
				}
			</div>
		</div>
	)
}

function Category({ label }) {
	return (
		<Link href={`/${label}`} className='category'>
			<h3 className='title'>{ label }</h3>
			<p className='description'>
				Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.
			</p>
		</Link>
	)
}

export default Categories
