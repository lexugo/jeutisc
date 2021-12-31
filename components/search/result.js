export default function Result({ title, subtitle, reference, type, source, description }) {

	const mediaType = Array.isArray(type) ? type[0] : type // Only shoe the first media type
	return (
		<div className={`${mediaType} resource`}>
			<span className='media'>
				<span className='type'>{ mediaType }</span>
				<a href={reference} target='_blank' className='reference'>{ reference }</a>
			</span>
			<h4 className='title'>{ reference ? <a href={ reference } target='_blank'>{ title }</a> : title }</h4>
			{ subtitle && <p className='description'>{ subtitle }</p> }
		</div>
	)
}
