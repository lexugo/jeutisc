import Checkbox from 'components/form/checkbox'

import { refined } from 'components/search/by/refinement'

function Types({ items: types, refine, currentRefinement: refinements }) {
	return (
		<div className='by media type'>
			<label htmlFor='medias'>Je préfère voir les</label>
			<div className='media types'>
				<Type label='Tous' value='' isRefined={!refinements.length} onChange={() => refine('')} />
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
