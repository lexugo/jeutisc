import { refined } from 'components/search/by/refinement'

function Categories({ items: categories, refine }) {
	return (
		<div className='by categories'>
			<div className='categories'>
				{ categories.map(category =>
					<Category key={category.label} {...category} onClick={() => refine(category.value)} />)
				}
			</div>
		</div>
	)
}

function Category({ label, onClick }) {
	return (
		<div className='category' onClick={onClick}>
			<h3 className='title'>{ label }</h3>
			<p className='description'>
				Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.
			</p>
		</div>
	)
}

export default refined(Categories, 'category')
