import useParam from 'hooks/useParam'

import { refined } from 'components/search/by/refinement'
import Checkbox from '../../form/checkbox'

function Tags({ items: tags, refine, currentRefinement: refinements }) {
	const [category] = useParam('category')
	const [subcategory] = useParam('subcategory')

	return (
		<div className='by tags'>
			<header>
				<h2 className='title'>{ subcategory }</h2>
				<p className='description'>
					Adipisci asperiores, consequuntur dignissimos fugiat magnam non, officiis,
					quisquam ratione repudiandae sapiente voluptatibus.
				</p>
			</header>
			<div className="tags">
				{ tags.map(tag => <Tag key={tag.label} {...tag} onChange={() => refine(tag.value)} />)}
			</div>
		</div>
	)
}

function Tag({ label, value, isRefined, onChange }) {
	return <Checkbox
		name='tags'
		label={label}
		value={value}
		checked={isRefined}
		onChange={onChange}
		className='tag'
	/>
}

export default refined(Tags, 'tags')
