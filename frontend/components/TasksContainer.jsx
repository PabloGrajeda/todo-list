import React from 'react'
import { TaskCard } from './TaskCard'

const TasksContainer = ({ tasks = [1] }) => {
	if (!tasks?.length) {
		return (
			<p className='font-semibold text-center opacity-50'>
				No tasks yet. Add a task to get started!
			</p>
		)
	}

	return (
		<div>
			{tasks.map((task, index) => (
				<TaskCard
					key={index}
					id='adasdasdasklñsahdfñlkh'
					title='this is my first task'
					description='this is the first description'
					completed={false}
					createdAt={new Date()}
				/>
			))}
		</div>
	)
}

export default TasksContainer
