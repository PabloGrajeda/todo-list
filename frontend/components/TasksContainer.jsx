import React from 'react'
import { TaskCard } from './TaskCard'
import BoxContainer from './BoxContainer'

const TasksContainer = ({ tasks }) => {
	if (!tasks?.length) {
		return (
			<p className='font-semibold text-center opacity-50'>
				No tasks yet. Add a task to get started!
			</p>
		)
	}

	return (
		<div className='space-y-4'>
			{tasks.map((task) => (
				<TaskCard key={task.id} {...task} />
			))}
		</div>
	)
}

export const TaskContainerSkeleton = () => {
	return (
		<div className='space-y-4'>
			<BoxContainer
				className={'bg-gray-100 animate-pulse h-32 m-2 border-none'}
			/>
			<BoxContainer
				className={'bg-gray-100 animate-pulse h-32 m-2 border-none'}
			/>
			<BoxContainer
				className={'bg-gray-100 animate-pulse h-32 m-2 border-none'}
			/>
		</div>
	)
}

export default TasksContainer
