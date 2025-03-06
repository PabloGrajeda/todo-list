import { Router } from 'express'
import {
	createTask,
	getTasks,
	patchTask,
	deleteTask,
} from '../controllers/tasks.controller.js'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.patch('/:id', patchTask)
router.delete('/:id', deleteTask)

export default router
