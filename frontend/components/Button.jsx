const Button = ({ children }) => {
	return (
		<button className='rounded-lg bg-black text-white py-2 px-4 w-fit self-end cursor-pointer hover:opacity-85'>
			{children}
		</button>
	)
}

export default Button
