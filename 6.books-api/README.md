## 📚 Books CRUD – MERN  Project

A full-stack **Books Management CRUD application** built using the **MERN stack**.
This project demonstrates real-world REST API development, React UI without Tailwind,
and clean component architecture using **plain CSS + lucide-react icons**.


## 🚀 Features

### Backend (Express + MongoDB)

- ✅ Create new books

- ✅ Read all books

- ✅ Read book by ID

- ✅ Update existing books

- ✅ Delete books

- ✅ Mongoose validation

- ✅ Seeder script for test data

### Frontend (React + CSS)

- ✅ Responsive Grid UI

- ✅ Reusable components (Button, Input)

- ✅ Icons using lucide-react

- ✅ Edit & Delete actions

- ✅ Red delete button for UX clarity

- ✅ Form validation handling

- ✅ No Tailwind CSS used


## 🛠️ Tech Stack

### Backend

- **Node.js**

- **Express.js**

- **MongoDB**

- **Mongoose**

- **dotenv**

### Frontend

- **React (Vite)**

- **Plain CSS** (no Tailwind)

- **lucide-react**

## ⚙️ Setup Instructions

### 🔹 Backend Setup

cd backend

npm install

Create .env

MONGO_URI=mongodb://127.0.0.1:27017/booksdb

PORT=5000

Seed sample data:

node seed.js

Start server:

node server.js

API runs at:

http://localhost:5000/api/books

🔹 Frontend Setup

cd client

npm install

npm run dev

Frontend runs at:

http://localhost:5173

# 🔗 API Endpoints

Method	Endpoint	Description

POST	/api/books	Add new book

GET	/api/books	Get all books

GET	/api/books/:id	Get book by id

PUT	/api/books/:id	Update book

DELETE	/api/books/:id	Delete book

🧪 Sample API Request

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "publishedYear": 2018
}

# 🌱 Database Seeding

Run this anytime to repopulate test data:

node seed.js

Clears old records

Inserts 10 realistic sample books


## Screenshots

<img width="1193" height="1049" alt="image" src="https://github.com/user-attachments/assets/585524ff-e34d-4312-b19b-17a82ac69817" />
