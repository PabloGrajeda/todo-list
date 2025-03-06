import express from 'express'
import cors from 'cors'
import healthcheckRoutes from './routes/healthcheck.router.js'
import tasks from './routes/tasks.router.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/v1/healthcheck', healthcheckRoutes)
app.use('/v1/tasks', tasks)

export default app
