### State & Capital Selector (MERN Stack)

A simple MERN stack application that displays Indian states and automatically shows the corresponding capital when a state is selected.
Built with clean UI, proper data flow, and seed-based MongoDB setup.

# 🚀 Features

State dropdown populated from MongoDB Atlas

Capital auto-displays based on selected state

Clean, minimal UI (no UI library dependency)

Seed script for consistent database setup

REST API using Express

Production-safe MongoDB Atlas connection

# 🛠 Tech Stack

Frontend

React

JavaScript (ES6+)

CSS

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

# ⚙️ Setup & Installation

# 1️⃣ Clone the Repository

git clone https://github.com/your-username/drop-down.git

cd drop-down

# 2️⃣ Backend Setup

cd backend

npm install


Create .env file:

MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/stateDB

PORT=5000

# 3️⃣ Seed the Database (MongoDB Atlas)

npm run seed


✔ Inserts initial state–capital data

✔ Safe to re-run (unique constraint applied)

# 4️⃣ Start Backend Server

npm start


Server runs on:

http://localhost:5000

# 5️⃣ Frontend Setup

cd frontend

npm install

npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoint
Get All States
GET /api/states


Response

[
  {
    "_id": "65xxxx",
    "state": "Telangana",
    "capital": "Hyderabad"
  }
]


## Screenshot

<img width="421" height="319" alt="image" src="https://github.com/user-attachments/assets/ddf77762-ca4e-4c75-9701-4d80765f35aa" />

📄 License

This project is open-source and free to use.

