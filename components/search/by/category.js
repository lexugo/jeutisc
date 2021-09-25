import { hierarchical } from 'components/search/by/refinement'

function Categories({ items: categories, refine, currentRefinement: category }) {

	function thing(e, value) {
		e.stopPropagation()
		console.log('r', value)
		refine(value)
	}

	if (category) {
		// Subcategproes
		return (
			<div className='by subcategories'>
				<header>
					<h2 className='title'>{ category }</h2>
					<p className='description'>Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.</p>
				</header>
				<div className='subcategories'>

				</div>
			</div>
		)
	}

	return (
		<div className='by categories'>
			<div className='categories'>
				{ categories.map(category =>
					<Category key={category.label} {...category} onClick={thing} />)
				}
			</div>
		</div>
	)
}

function Category({ label, value, isRefined, onClick, items }) {

	const subcategories = items?.map(category =>
		<Subcategory key={category.label} {...category} onClick={(e) => onClick(e, category.value)} />)
	return (
		<div className={`category ${isRefined ? 'selected' : ''}`} onClick={(e) => onClick(e, value)}>
			<h3 className='title'>{ label }</h3>
			<p className='description'>
				Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.
			</p>
			{ subcategories && <div className='subcategories'>{ subcategories }</div>}
		</div>
	)
}

function Subcategory({ label, onClick }) {
	return (
		<div className='subcategory' onClick={onClick}>
			<h3 className='title'>{ label }</h3>
			<p className='description'>Facilis harum impedit maxime molestiae rem reprehenderit suscipit veniam.</p>
		</div>
	)
}

export default hierarchical(Categories, ['category.lvl0', 'category.lvl1'])
