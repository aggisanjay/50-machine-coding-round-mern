## 📁 File Upload Application

A full-stack file upload system built with **React, Node.js, Express, Multer, and MongoDB**.  
Users can upload files securely while file metadata is stored in the database.

## 🚀 Features

- Single file upload

- Client-side validation

- File storage using Multer

- File metadata saved in MongoDB

- Environment variable support with dotenv

- Clean & responsive UI

- Error handling & upload status feedback

## 🛠 Tech Stack

**Frontend**

- React

- CSS (custom UI)

**Backend**

- Node.js

- Express

- Multer

- MongoDB (Mongoose)

- dotenv


## ⚙️ Setup Instructions

### 1️⃣ Clone repo

git clone https://github.com/yourusername/file-upload-app.git

cd file-upload-app

2️⃣ Backend Setup

cd server

npm install

Create .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/fileUploads

Run backend:

node server.js

3️⃣ Frontend Setup

cd client

npm install

npm run dev

🔌 API Endpoint

Upload Single File

POST /api/upload

Form Data

Key	Type
file	File

Success Response

json
Copy code
{
  "_id": "...",
  "originalName": "resume.pdf",
  "fileName": "17023812384.pdf",
  "mimeType": "application/pdf",
  "size": 34567,
  "path": "uploads/17023812384.pdf"
}


## Screenshot

<img width="624" height="414" alt="image" src="https://github.com/user-attachments/assets/8003c8a4-88a5-4313-8178-afbb8eb00c06" />


