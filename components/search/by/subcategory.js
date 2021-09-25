import { menu } from 'components/search/by/refinement'

function Subcategories({ category, items: subcategories, refine }) {
	console.log(category)
	return (
		<div className='by subcategories'>
			Hello
		</div>
	)
}

export default menu(Subcategories, 'subcategory')
