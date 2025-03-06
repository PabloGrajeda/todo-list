import { LoaderCircle } from 'lucide-react'

const Button = ({ children, loading, type = 'text' }) => {
	return (
		<button
			type={type}
			disabled={loading}
			className={`rounded-lg bg-black text-white py-2 px-4 w-fit self-end cursor-pointer hover:opacity-85 transition-all disabled:opacity-85 disabled:cursor-not-allowed `}
		>
			{loading ? (
				<span className='inline-flex items-center gap-1'>
					<LoaderCircle size={16} className='animate-spin' />
					Adding...
				</span>
			) : (
				children
			)}
		</button>
	)
}

export default Button
