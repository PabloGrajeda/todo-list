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

export const taskExists = async (id) => {
	const document = await collection.doc(id).get()
	return document.exists
}

export const addTask = async (task) => {
	await collection.add({
		...task,
		createdAt: new Date(),
	})
	return task
}

export const updateTask = async (id, newTask) => {
	await collection.doc(id).update(newTask)
	return { id, ...newTask }
}

export const removeTask = async (id) => {
	await collection.doc(id).delete()
	return { id }
}
