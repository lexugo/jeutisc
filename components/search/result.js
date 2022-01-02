import useToggle from 'hooks/useToggle'

export default function Result({ title, subtitle, reference, type, source, description }) {
	const [detailed, toggleDetailed] = useToggle()

	function handleToggle(e) {
		if (!e.target.href) // Don't toggle on links
			toggleDetailed()
	}

	const detailedClass = description ? 'detailed ' : ''
	const mediaType = Array.isArray(type) ? type[0] : type // Only shoe the first media type
	return (
		<div className={`${detailedClass}resource`} onClick={handleToggle}>
			<span className='media'>
				<span className='type'>{ mediaType }</span>
				{ reference && <a href={ reference } target='_blank' className='reference'>{ reference }</a> }
			</span>

			<h4 className='title'>{ reference ? <a href={ reference } target='_blank'>{ title }</a> : title }</h4>
			{ subtitle && <p className='description'>{ subtitle }</p> }

			{ detailed && description && <p className='details'>{ description }</p> }
		</div>
	)
}
