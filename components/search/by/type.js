import Checkbox from 'components/form/checkbox'

import { refined } from 'components/search/by/refinement'

function Types({ items: types, refine, currentRefinement: refinements }) {
	return (
		<div className='by media type'>
			<label htmlFor='medias'>I prefer to see</label>
			<div className='media types'>
				<Type label='all' value='' isRefined={!refinements.length} onChange={() => refine('')} />
				{ types.map(type =>
					<Type key={type.label} {...type} onChange={() => refine(type.value)}  />)
				}
			</div>
		</div>
	)
}

function Type({ label, value, isRefined, onChange }) {
	return <Checkbox
		name='medias'
		label={label}
		value={value}
		checked={isRefined}
		onChange={onChange}
		className='media type'
	/>
}

export default refined(Types, 'type')
