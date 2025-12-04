## 🔐 MERN Authentication App

A full-stack authentication system built with **React, Node.js, Express, and MongoDB**.  
This application supports secure user **registration**, **login with JWT authentication**, and **protected profile access** — styled with pure CSS (no UI frameworks).


## 🚀 Features

 ✅ User Registration (Name, Email, Password)

 ✅ Secure Password Hashing with **bcrypt**

 ✅ JWT-based Login Authentication

 ✅ Protected API Route (`/profile`)

 ✅ Token storage using `localStorage`

 ✅ Responsive UI using **custom CSS only**

 ✅ Express + MongoDB backend API

 ✅ Clean code structure


## 🛠️ Tech Stack

# Frontend

- React (Vite)

- Axios

- Pure CSS

# Backend

- Node.js

- Express

- MongoDB + Mongoose

- bcrypt

- jsonwebtoken (JWT)

- dotenv


## ⚙️ Setup Instructions

1️⃣ Clone Repository

git clone https://github.com/<your-username>/mern-auth-app.git

cd mern-auth-app

2️⃣ Backend Setup

cd server

npm install

Create .env file:

MONGO_URI=mongodb://127.0.0.1:27017/userDB

JWT_SECRET=your_secret_key

PORT=4000

Start server:

node index.js

Server runs at:

http://localhost:4000

3️⃣ Frontend Setup

cd client

npm install

npm run dev

App runs at:

http://localhost:5173

🔁 Application Flow

User registers via /api/register

Password is hashed and saved to MongoDB

User logs in via /api/login

JWT token is generated and returned

Token is saved to localStorage

Protected /api/profile endpoint validates JWT

User profile data is returned

🔐 API Endpoints

Register User

POST /api/register

Body

json

{
  "name": "John",
  "email": "john@email.com",
  "password": "123456"
}
Login User

POST /api/login

Body

json

{
  "email": "john@email.com",
  "password": "123456"
}
Protected Profile

GET /api/profile

Headers
Authorization: Bearer <JWT_TOKEN>

## Screenshot

# Register

<img width="564" height="380" alt="image" src="https://github.com/user-attachments/assets/9177136d-198b-4fa0-b7b7-dbd5ee98e2e0" />

# Login

<img width="572" height="390" alt="image" src="https://github.com/user-attachments/assets/d3bf3ac9-3f93-4897-a595-db65649f5989" />

# Profile

<img width="516" height="371" alt="image" src="https://github.com/user-attachments/assets/85378b67-e6ef-45aa-841c-16790a5c456d" />



📜 License

This project is licensed under the MIT License.


