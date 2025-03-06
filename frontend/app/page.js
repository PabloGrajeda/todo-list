'use client'

import BoxContainer from '@/components/BoxContainer'
import TaskForm from '@/components/TaskForm'
import TasksContainer, {
	TaskContainerSkeleton,
} from '@/components/TasksContainer'
import axios from 'axios'
import { Suspense, useEffect, useState } from 'react'

// const { tasks } = fetchTasksResponse.data

const Home = () => {
	const [tasks, setTasks] = useState(null)

	useEffect(() => {
		const fethTasks = async () => {
			const fetchTasksResponse = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/tasks`
			)
			const { tasks } = fetchTasksResponse.data
			setTasks(tasks)
		}
		fethTasks()
	}, [])
	return (
		<div className='p-12 space-y-10 w-full max-w-2xl'>
			<h1 className='font-bold text-3xl text-center'>Task Manager</h1>
			<BoxContainer>
				<h2 className='font-semibold text-xl'>Add new Task</h2>
				<TaskForm setTasks={setTasks} />
			</BoxContainer>

			<BoxContainer>
				<h2 className='font-semibold text-xl'>Tasks</h2>
				<TasksContainer tasks={tasks} />
			</BoxContainer>
		</div>
	)
}

export default Home
