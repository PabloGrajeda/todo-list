import TextField from '@/components/TextField'
import TextAreaField from '@/components/TextareaField'
import Button from '@/components/Button'

const TaskForm = () => {
	return (
		<form className='space-y-4 flex flex-col'>
			{/* FORM FIELD */}
			<TextField
				id='title'
				title='Title'
				placeholder='Enter task title'
				required
			/>

			<TextAreaField
				id='description'
				title='Description'
				placeholder='Enter task title'
				required
			/>

			<Button>Add Task</Button>
		</form>
	)
}

export default TaskForm
