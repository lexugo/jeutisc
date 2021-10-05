export default function Checkbox({ label, value, name, checked, onChange, className }) {
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
