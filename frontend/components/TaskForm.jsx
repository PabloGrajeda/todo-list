'use client'

import TextField from '@/components/TextField'
import TextAreaField from '@/components/TextareaField'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { showToast } from '@/utils'

const TaskForm = ({ setTasks }) => {
	const [formValues, setFormValues] = useState({ title: '', description: '' })
	const [formErrors, setFormErrors] = useState(null)
	const [isSaving, setIsSaving] = useState(false)

	const onSubmit = async (event) => {
		event.preventDefault()
		if (!validateForm()) {
			return
		}

		// Valid form, create task
		setIsSaving(true)
		try {
			const { data: newTask } = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/tasks`,
				{
					...formValues,
					completed: false,
				}
			)
			showToast('success', 'The task has been created successfully!')
			setTasks((prevTasks) => [newTask, ...prevTasks])
			setFormValues({
				title: '',
				description: '',
			})
			setFormErrors(null)
		} catch (err) {
			showToast('error', 'Oops, something went wrong!')
		} finally {
			setIsSaving(false)
		}
	}

	const validateForm = () => {
		if (!formValues.title.trim() || !formValues.description.trim()) {
			setFormErrors((prevSetFormErrors) => ({
				...prevSetFormErrors,
				title: !formValues.title.trim() ? 'Field is required' : '',
				description: !formValues.description.trim()
					? 'Field is required'
					: '',
			}))

			return false
		}

		setFormErrors({})
		return true
	}

	const onChange = (event) => {
		const { name, value } = event.target
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			[name]: value,
		}))
	}

	useEffect(() => {
		if (!formErrors) {
			return
		}
		validateForm()
	}, [formValues])

	return (
		<form className='space-y-4 flex flex-col' onSubmit={onSubmit}>
			{/* FORM FIELD */}
			<TextField
				id='title'
				title='Title'
				placeholder='Enter task title'
				value={formValues.title}
				handleChange={onChange}
				error={formErrors?.title}
				required
			/>

			<TextAreaField
				id='description'
				title='Description'
				placeholder='Enter task description'
				value={formValues.description}
				handleChange={onChange}
				error={formErrors?.description}
				required
			/>

			<Button type='submit' loading={isSaving}>
				Add Task
			</Button>
		</form>
	)
}

export default TaskForm
