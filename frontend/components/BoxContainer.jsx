const BoxContainer = ({ children }) => {
	return (
		<div className='flex flex-col gap-5 border border-gray-200 p-4 rounded-lg shadow'>
			{children}
		</div>
	)
}

export default BoxContainer
