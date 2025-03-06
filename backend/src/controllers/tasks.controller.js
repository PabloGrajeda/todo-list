import { fetchTasks } from '../services/tasks.service.js'

export const getTasks = async (_req, res) => {
	try {
		const tasks = await fetchTasks()
		res.json({ tasks })
	} catch (err) {
		res.status(500).json({
			error: 'There was an error while retreiving tasks',
		})
	}
}
