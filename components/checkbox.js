import { useState } from 'react'

function Checkbox({ label, value, name, checked, onChange, className }) {
	// const [checked, setChecked] = useState(false)

	return (
		<div className={className}>
			<input
				id={label} // Todo: Use better id for checkboxes
				name={name}
				type='checkbox'
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={label} >{ label }</label>
		</div>
	)
}

export default Checkbox
