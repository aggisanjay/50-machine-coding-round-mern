### MERN Posts App

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to **create and read posts** with **server-side pagination**. Built to reflect real-world backend/frontend separation and proper API design.


## 🚀 Features

* Create posts (title, body, author)

* Read posts in a clean, card-based UI

* Server-side pagination (MongoDB `skip` + `limit`)

* RESTful API design

* Realistic seeded data (7 posts)

* Clean project structure


## 🧱 Tech Stack

**Frontend**

* React

* Fetch API

* CSS (responsive card layout)

**Backend**

* Node.js

* Express.js

* MongoDB + Mongoose

* dotenv

* CORS

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/your-username/mern-posts-app.git

cd mern-posts-app

### 2️⃣ Backend Setup

cd backend

npm install

Create a `.env` file:

MONGO_URI=mongodb://127.0.0.1:27017/postApp

Start MongoDB locally, then run:

node server.js


Backend runs on:

http://localhost:5000

### 3️⃣ Seed the Database (Important)

This inserts **7 real posts** for pagination testing.


node seed.js


Expected output:


MongoDB connected

Old posts removed

7 posts inserted successfully


### 4️⃣ Frontend Setup


cd ../frontend

npm install

npm start


Frontend runs on:


http://localhost:5173


## 🔌 API Endpoints

### ➕ Create Post


POST /api/posts


json
{
  "title": "Post title",
  "body": "Post content",
  "author": "Author name"
}


---

### 📄 Get Posts (Paginated)


GET /api/posts?page=1


Response:

json
{
  "posts": [ ... ],
  "totalPages": 2
}

## 🧪 Pagination Testing

* Page limit: **6 posts**
* Seeded posts: **7 posts**

Expected behavior:

| Page | Posts Returned |
| ---- | -------------- |
| 1    | 6 posts        |
| 2    | 1 post         |

## Screenshots

<img width="976" height="808" alt="image" src="https://github.com/user-attachments/assets/1afa5b99-5905-4b00-81b9-5f93c1d06218" />

