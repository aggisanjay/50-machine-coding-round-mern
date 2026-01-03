###  Banking Dashboard (MERN Stack)

A simple Digital Banking Dashboard built using the MERN stack that allows users to track credits and debits, view current balance, and manage recent transactions in real time.

This project demonstrates full-stack fundamentals, clean state management, REST APIs, and practical UI design — suitable for machine coding rounds and portfolio reviews.

# 🚀 Features

🔐 Basic Login Authentication (Frontend-only demo auth)

💰 Real-time Balance Calculation

➕ Add Credit & Debit Transactions

📊 View Recent Transactions (latest 10)

🧮 Automatic balance updates based on transaction type

🌐 REST API with MongoDB persistence

🎨 Clean, responsive UI

# 🛠️ Tech Stack

Frontend

React.js

Hooks (useState, useEffect)

Fetch API

Plain CSS (custom styling)

Backend

Node.js

Express.js

MongoDB

Mongoose

dotenv

CORS


# ⚙️ Setup & Run Locally

1️⃣ Clone the repository

git clone https://github.com/your-username/banking-dashboard.git

cd banking-dashboard

2️⃣ Backend Setup

cd server

npm install


Create a .env file:

MONGO_URL=your_mongodb_connection_string


Start the server:

npm start


Server runs on:

http://localhost:5000

3️⃣ Frontend Setup

cd client

npm install

npm run dev


Frontend runs on:

http://localhost:5173

🔐 Demo Login Credentials

Email: user@bank.com

PIN:   1234


Note: Authentication is intentionally frontend-only for simplicity.

📡 API Endpoints

Get all transactions

GET /api/transactions


Response:

{
  "transactions": [],
  "balance": 0
}

Create a transaction

POST /api/transactions

Body:

{
  "type": "credit",
  "amount": 5000,
  "description": "Salary",
  "category": "salary"
}


## Screenshots

<img width="510" height="372" alt="image" src="https://github.com/user-attachments/assets/933aade0-53cc-4bc8-aa66-63f903e3b6f6" />


<img width="1048" height="575" alt="image" src="https://github.com/user-attachments/assets/6d8b603f-e781-4054-8b04-ecc0a6743a5d" />


