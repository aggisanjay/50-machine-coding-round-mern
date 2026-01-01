### Student Management System (MERN)

A simple Student Management System built using the MERN stack. The application allows users to add students and view a list of students using REST APIs.

This project is intentionally kept clean and minimal to demonstrate core MERN fundamentals: REST API design, MongoDB schema modeling, and React state handling.

## 🚀 Features

Add a student (Name, Roll No, Course, Marks)

Fetch and display all students

RESTful API design (GET / POST)

Clean separation of backend and frontend

## 🛠️ Tech Stack

Frontend

React

Fetch API

Plain CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

dotenv

cors


# 🔌 API Endpoints

➤ Get All Students

GET /api/students

Response:

[
  {
    "_id": "...",
    "name": "Sanjay",
    "rollNo": 101,
    "course": "CSE",
    "marks": 85
  }
]

➤ Create Student

POST /api/students

Request Body:

{
  "name": "Sanjay",
  "rollNo": 101,
  "course": "CSE",
  "marks": 85
}

⚙️ Setup & Installation

1️⃣ Clone Repository

git clone https://github.com/your-username/student-management-mern.git

cd student-management-mern

2️⃣ Backend Setup

cd backend

npm install

Create a .env file:

MONGO_URI=mongodb://127.0.0.1:27017/studentdb

PORT=5000

Start backend:

npm start

Server runs at:

http://localhost:5000

3️⃣ Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:5173

🧠 Design Decisions

Used MVC-like structure in backend for clarity

Used Mongoose schema validation for data integrity

Kept frontend logic simple using React hooks

Avoided unnecessary libraries to keep fundamentals clear

❗ Common Issues

Backend not reachable → Ensure server is running and CORS is enabled

MongoDB connection error → Ensure MongoDB service is running

CORS error → cors middleware must be enabled in backend

📌 Future Improvements

Edit & Delete student

Form validation

Pagination & search

Toast notifications

Deployment (Render / Vercel)

## Screenshots

<img width="779" height="384" alt="image" src="https://github.com/user-attachments/assets/07fe0f49-409b-4e7a-8cd9-d4d72cd6c3c6" />


👤 Author

Sanjay Aggi
Full Stack MERN Developer

📄 License

This project is for learning and interview demonstration purposes.
