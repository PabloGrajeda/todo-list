import { db } from '../config/firebase.js'
const collection = db.collection('tasks')

export const fetchTasks = async () => {
	const response = await collection.get()
	const tasks = response.docs.map((document) => ({
		id: document.id,
		...document.data(),
	}))
	return tasks
}
