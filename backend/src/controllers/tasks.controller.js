import {
	addTask,
	fetchTasks,
	updateTask,
	removeTask,
	getTaskById,
} from '../services/tasks.service.js'

export const getTasks = async (_req, res) => {
	try {
		const tasks = await fetchTasks()
		res.json({ tasks })
	} catch (err) {
		res.status(500).json({
			message: 'There was an error while retreiving tasks',
		})
	}
}

export const createTask = async (req, res) => {
	try {
		const { body: task } = req
		const { id } = await addTask(task)
		const newTask = await getTaskById(id)

		res.status(201).json({ id: newTask.id, ...newTask.data() })
	} catch (err) {
		res.status(500).json({
			message: 'There was an error while creating task',
		})
	}
}

export const patchTask = async (req, res) => {
	try {
		const { body } = req
		const { id } = req.params

		const task = await getTaskById(id)
		if (!task.exists) {
			return res
				.status(401)
				.json({ message: `task ${id} does not exist` })
		}

		await updateTask(id, body)
		res.status(204).send()
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: `There was an error while updating task`,
		})
	}
}

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params

		const task = await getTaskById(id)
		if (!task.exists) {
			return res
				.status(401)
				.json({ message: `task ${id} does not exist` })
		}

		await removeTask(id)
		res.status(204).send()
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: `There was an error while deleting task`,
		})
	}
}
