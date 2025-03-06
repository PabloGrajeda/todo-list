import admin from 'firebase-admin'
import dotenv from 'dotenv'
import { readFileSync } from 'fs'

dotenv.config()

const serviceAccountkeyPath = process.env.FIREBASE_CREDENTIALS

if (!serviceAccountkeyPath) {
	throw new Error('No FIREBASE_CREDENTIALS env variable found')
}

let serviceAccount

try {
	serviceAccount = JSON.parse(readFileSync(serviceAccountkeyPath, 'utf8'))

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	})
} catch (err) {
	console.log('There was an error while connecting to firebase', err.message)
	throw new Error('could not connect to firebase')
}

const db = admin.firestore()

export { db }
