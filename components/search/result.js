export default function Result({ title, subtitle, reference, type, source, description }) {
	return (
		<div className='resource'>
			<span className='media'>
				{ type && <span className='type'>{ type }</span> }
				<a href={reference} className='reference'>{ reference }</a>
			</span>
			<h4 className='title'>{ reference ? <a href={ reference }>{ title }</a> : title }</h4>
			{ source && <span className='source'>{ source }</span> }
			{ subtitle && <p className='description'>{ subtitle }</p> }
		</div>
	)
}
