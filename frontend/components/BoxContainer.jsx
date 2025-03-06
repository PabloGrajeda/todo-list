const BoxContainer = ({ children, className }) => {
	return (
		<div
			className={`flex flex-col gap-5 border border-gray-200 p-4 rounded-lg shadow ${className}`}
		>
			{children}
		</div>
	)
}

export default BoxContainer
