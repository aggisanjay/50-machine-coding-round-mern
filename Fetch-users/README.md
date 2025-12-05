## Users Management - MERN Stack

A full-stack MERN application that fetches and displays users stored in MongoDB Atlas inside a professional React table UI (no CSS frameworks).

This project demonstrates real-world skills:

- REST API development with Express

- Database integration using MongoDB Atlas

- Data seeding automation

- API consumption with React

- Clean, responsive UI using pure CSS

## 🚀 Features

- ✅ MongoDB Atlas integration

- ✅ Express REST API to fetch users

- ✅ Data seeding script (10 fake users)

- ✅ React UI with professional table layout

- ✅ Loading states and responsive design

- ✅ Clean MVC project structure

## 🛠 Tech Stack

**Frontend**

- React

- Axios

- CSS

**Backend**

- Node.js

- Express.js

- Mongoose

**Database**

- MongoDB Atlas


## ⚙️ Setup Instructions

### 1. Clone repository

git clone <REPOSITORY_URL>

cd users-management

2. Backend setup

cd backend

npm install

Create .env file:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/usersdb

3. Seed test data

node seed.js

Inserts 10 fake users into MongoDB Atlas.

4. Start backend

node server.js

Backend API runs on:

http://localhost:5000/api/users

5. Frontend setup

cd ../frontend

npm install

npm start

View app:

http://localhost:5173

🧪 API Endpoints

Method	Endpoint	Description

GET	/api/users	Fetch all users

## 📸 Screenshots

<img width="1118" height="720" alt="image" src="https://github.com/user-attachments/assets/cf72b9b5-0eaa-42e8-a618-71b8be0ea143" />




