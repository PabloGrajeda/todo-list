import BoxContainer from '@/components/BoxContainer'
import TaskForm from '@/components/TaskForm'
import TasksContainer, {
	TaskContainerSkeleton,
} from '@/components/TasksContainer'
import { Suspense } from 'react'

const fetchTasksResponse = await fetch(`${process.env.API_URL}/tasks`)
const { tasks } = await fetchTasksResponse.json()

const Home = () => {
	return (
		<div className='p-12 space-y-10 w-full max-w-2xl'>
			<h1 className='font-bold text-3xl text-center'>Task Manager</h1>
			<BoxContainer>
				<h2 className='font-semibold text-xl'>Add new Task</h2>
				<TaskForm />
			</BoxContainer>

			<BoxContainer>
				<h2 className='font-semibold text-xl'>Tasks</h2>
				<Suspense fallback={<TaskContainerSkeleton />}>
					<TasksContainer tasks={tasks} />
				</Suspense>
			</BoxContainer>
		</div>
	)
}

export default Home
