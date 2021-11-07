import useParam from 'hooks/useParam'
import { useSubcategories } from 'hooks/useSearch'
import Link from '../../link'
import { Configure } from 'react-instantsearch-dom'

export default function Subcategories() {
	const [category] = useParam('category')
	const subcategories = useSubcategories()

	return (
		<div className='by subcategories'>
            <p>More specifically, I want to learn about</p>
			<div className='subcategories'>
				{ subcategories.map(category =>
					<Subcategory key={category} label={category} onClick={() => console.log('click')} />)
				}
			</div>
		</div>
	)
}

function Subcategory({ label }) {
	const [category] = useParam('category') // Todo: refactor category links

	return (
		<Link href={`${category}/${label}`} className='subcategory' >
			<h3 className='title'>{ label }</h3>
			<p className='description'>Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.</p>
		</Link>
	)
}
