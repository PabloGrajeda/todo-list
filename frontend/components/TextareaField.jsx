const TextAreaField = ({ id, title, placeholder, required }) => {
	return (
		<div className='space-y-2'>
			<label className='font-semibold text-sm' htmlFor={id}>
				{title}
				{required && <span className='text-red-500'>&nbsp;*</span>}
			</label>
			<textarea
				className='w-full border border-gray-200 rounded p-2 text-sm'
				placeholder={placeholder}
				type='text'
				id={id}
				name={id}
			/>
		</div>
	)
}

export default TextAreaField
