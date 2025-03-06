import React, { useState } from 'react'
import BoxContainer from './BoxContainer'
import { TrashIcon } from 'lucide-react'
import { format } from 'date-fns'
import axios from 'axios'
import { showToast } from '@/utils'

export const TaskCard = ({ id, title, description, completed, createdAt }) => {
	const parseCreatedAt = new Date(createdAt._seconds * 1000)
	const formattedCreatedAt = format(parseCreatedAt, 'LLL d, yyyy p')
	const [isCompleted, setIsCompleted] = useState(completed)

	const handleChange = async (event) => {
		const { checked } = event.target
		setIsCompleted(checked)

		try {
			await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
				completed: checked,
			})
		} catch (err) {
			setIsCompleted(!checked)
			showToast('error', 'Oops, something went wrong!')
		}
	}

	return (
		<BoxContainer className={`shadow-none ${isCompleted && 'bg-gray-100'}`}>
			<div className='flex gap-2 items-start'>
				<input
					type='checkbox'
					className='size-4 border cursor-pointer mt-1'
					checked={isCompleted}
					id={id}
					onChange={handleChange}
				/>

				<div className='space-y-2'>
					{/* TITLE */}
					<div className='flex gap-2 items-center justify-between w-full'>
						<label
							className={`font-bold cursor-pointer ${
								isCompleted && 'line-through'
							}`}
							htmlFor={id}
						>
							{title}
						</label>
					</div>

					{/* DESCRIPTION */}
					<p
						className={`text-sm text-gray-500 ${
							isCompleted && 'line-through'
						}`}
					>
						{description}
					</p>

					{/* CREATED DATE */}
					<p className='text-xs text-gray-500'>
						Created: {formattedCreatedAt}
					</p>
				</div>

				<button className='p-4 hover:bg-red-100 rounded-lg transition-all ml-auto'>
					<TrashIcon size={16} color='red' />
				</button>
			</div>
		</BoxContainer>
	)
}
