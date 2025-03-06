import React from 'react'
import BoxContainer from './BoxContainer'
import { TrashIcon } from 'lucide-react'
import { format } from 'date-fns'

export const TaskCard = ({ id, title, description, completed, createdAt }) => {
	const parseCreatedAt = new Date(createdAt._seconds * 1000)
	const formattedCreatedAt = format(parseCreatedAt, 'LLL d, yyyy p')

	return (
		<BoxContainer className={`shadow-none ${completed && 'bg-gray-100'}`}>
			<div className='flex gap-2 justify-between items-start'>
				<input
					type='checkbox'
					className='size-4 border cursor-pointer mt-1'
					id={id}
				/>

				<div className='space-y-2'>
					{/* TITLE */}
					<div className='flex gap-2 items-center justify-between w-full'>
						<label
							className={`font-bold cursor-pointer ${
								completed && 'line-through'
							}`}
							htmlFor={id}
						>
							{title}
						</label>
					</div>

					{/* DESCRIPTION */}
					<p
						className={`text-sm text-gray-500 ${
							completed && 'line-through'
						}`}
					>
						{description}
					</p>

					{/* CREATED DATE */}
					<p className='text-xs text-gray-500'>
						Created: {formattedCreatedAt}
					</p>
				</div>

				<button className='p-4 hover:bg-red-100 rounded-lg transition-all'>
					<TrashIcon size={16} color='red' />
				</button>
			</div>
		</BoxContainer>
	)
}
