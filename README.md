# 📋 TODO LIST

## ⚙️ TODO API

This is a REST API built with Node.js, Express, and Firebase Firestore for managing tasks. The API allows users to create, read, update, and delete tasks.

#### Getting Started

1️⃣ Clone the Repository

2️⃣ Install Dependencies

``npm install``

3️⃣ Set Up Firebase Credentials

Go to [Firebase Console](https://console.firebase.google.com).

Select your project or create a new one.

Navigate to Project settings > Service accounts.

Click Generate new private key and download the JSON file.

Save the file as firebase-admin-key.json in the project root (or another location).

Create a .env file in the root directory and add:

```
FIREBASE_CREDENTIALS=./firebase-admin-key.json
PORT=3001
```
4️⃣ Start the Server

``npm run server``

The server will run on http://localhost:3001/ as default.

## ⚙️ TODO React APP
#### Getting Started

1️⃣ Install Dependencies

``npm install``

2️⃣ Create a .env file in the root directory and add:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/v1
```
3️⃣ Start the Application

``npm run dev``

The application will run on http://localhost:3000/ as default.

