const TextField = ({
	id,
	title,
	placeholder,
	value,
	handleChange,
	error,
	required,
}) => {
	return (
		<div className='space-y-2'>
			<label className='font-semibold text-sm' htmlFor={id}>
				{title}
				{required && <span className='text-red-500'>&nbsp;*</span>}
			</label>
			<div>
				<input
					className='w-full border border-gray-200 rounded p-2 text-sm'
					placeholder={placeholder}
					type='text'
					id={id}
					name={id}
					value={value}
					onChange={handleChange}
					required
				/>
				<span className='text-xs text-red-500'>{error}</span>
			</div>
		</div>
	)
}

export default TextField
