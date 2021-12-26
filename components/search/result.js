export default function Result({ title, subtitle, reference, type, tags, source, description }) {
	return (
		<div className={`${type} resource`}>
			<span className='media'>
				{ type && <span className='type'>{ type }</span> }
				<a href={reference} className='reference'>{ reference }</a>
			</span>
			<h4 className='title'>{ reference ? <a href={ reference }>{ title }</a> : title }</h4>
			{ subtitle && <p className='description'>{ subtitle }</p> }
		</div>
	)
}
