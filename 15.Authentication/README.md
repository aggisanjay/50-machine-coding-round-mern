### 🔐 Node.js Authentication System

A complete authentication system built with Node.js Express backend and React frontend, featuring token-based authentication middleware.


## ✨ Features

Backend

✅ Express.js server with RESTful API

✅ Authentication Middleware using hardcoded tokens

✅ Protected Routes requiring authentication

✅ CORS enabled for cross-origin requests

✅ Error Handling middleware

✅ User Management with roles (user/admin)

Frontend

✅ React with hooks (useState, useEffect)

✅ Beautiful UI with Tailwind CSS

✅ Login/Logout functionality

✅ Protected Dashboard and Profile pages

✅ Token Persistence using localStorage

✅ Demo Accounts for quick testing


## Backend Setup

Clone the repository

git clone https://github.com/yourusername/auth-app.git

cd auth-app

Navigate to backend folder

cd backend

Install dependencies

npm install

Start the backend server

npm start

The backend will run on http://localhost:3000

## Frontend Setup

Navigate to frontend folder

cd ../frontend

Install dependencies

npm install

Start the development server

npm start

The frontend will run on http://localhost:3001



## 🔄 Authentication Flow

1. User enters credentials
   ↓
2. Frontend sends POST to /api/auth/login
   ↓
3. Backend validates credentials
   ↓
4. Backend returns JWT token
   ↓
5. Frontend stores token in localStorage
   ↓
6. User accesses protected route
   ↓
7. Frontend sends request with Authorization header
   ↓
8. Middleware checks token validity
   ↓
9. If valid: Access granted
   If invalid: 401/403 error

## 🔐 Security Features

Token-based Authentication: Secure token validation

Protected Routes: Middleware guards sensitive endpoints

CORS Protection: Configured for specific origins

Error Handling: Graceful error responses

Input Validation: Email and password validation

## 🎨 Screenshots

Login Page

<img width="905" height="615" alt="image" src="https://github.com/user-attachments/assets/6fa10525-6161-4c58-a5d1-b423c61e2f93" />


Dashboard

<img width="891" height="612" alt="image" src="https://github.com/user-attachments/assets/d02f1c2c-6016-4e33-8293-a7bb40e34f81" />


Profile Page

<img width="871" height="580" alt="image" src="https://github.com/user-attachments/assets/350f0b06-709b-4936-bdb1-2788ef35a643" />




