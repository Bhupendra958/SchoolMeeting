# 🎓 Parent-Teacher Communication Portal

### *(Student Progress Tracking System)*

A **full-stack web application** designed to enhance communication between parents and teachers while enabling **real-time monitoring of student academic performance**.

---

## 🚀 Overview

This platform provides a **centralized system** where parents, teachers, and administrators can collaborate efficiently. It offers powerful tools for tracking academic progress, managing communication, and organizing school-related activities.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)

---

## ✨ Key Features

* 🔐 **Role-Based Access Control** (Parent, Teacher, Admin)
* 🔑 Secure Authentication & Authorization
* 📊 Student Progress Tracking with Filters
* 📝 Assignment & Grade Management
* 📅 Attendance Monitoring & Reports
* ⚠️ Behavior Tracking System
* 💬 Real-time Messaging (Parent ↔ Teacher)
* 📆 Meeting Scheduling & Management
* 📢 Announcements & Notifications
* 👤 Profile & Settings Management

---

## 📁 Project Structure

```
parent-teacher-portal/
│
├── backend/
│   ├── models/        # MongoDB Schemas
│   ├── routes/        # API Routes
│   ├── middleware/    # Auth Middleware
│   └── server.js      # Express Server
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI Components
│   │   ├── pages/        # Application Pages
│   │   ├── context/      # State Management
│   │   └── App.js        # Main App Entry
│   └── public/           # Static Files
│
└── docs/                 # Project Documentation
```

---

## ⚡ Getting Started

### 📌 Prerequisites

* Node.js (v14 or higher)
* MongoDB (Local or Atlas)
* npm

---

## 🔧 Installation & Setup

### 1️⃣ Install Dependencies

```bash
npm run install-all
```

---

### 2️⃣ Setup MongoDB

**Option A:** Local MongoDB

```bash
mongodb://localhost:27017/parent-teacher-portal
```

**Option B:** MongoDB Atlas (Cloud)
Use your connection string:

```
MONGODB_URI = mongodb+srv://bhupendra23_db_user:bhupi123@cluster0.bivayj.mongodb.net/parent-teacher-portal

```

---

### 3️⃣ Create Environment File

Create: `backend/.env`

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
JWT_EXPIRE=7d
```

---

### 4️⃣ Run the Application

```bash
npm run dev
```

---

### 🌐 Access the App

* Frontend → http://localhost:3000
* Backend → http://localhost:5000/api/health

---

## ▶️ Run Separately

* Backend only:

```bash
npm run server
```

* Frontend only:

```bash
cd frontend
npm start
```

---

## 📚 Documentation

Detailed documentation is available inside the **docs/** folder:

* 📘 Design Summary
* 🏗️ System Architecture
* 🗄️ Database Schema
* 📦 Module Breakdown
* 🔄 Page Flow
* 🔗 API Overview

---

## 🌍 Default Routes

| Page              | URL                  |
| ----------------- | -------------------- |
| Landing Page      | `/`                  |
| Login             | `/login`             |
| Register          | `/register`          |
| Parent Dashboard  | `/parent/dashboard`  |
| Teacher Dashboard | `/teacher/dashboard` |

---

## 🎯 Use Case

This system is ideal for:

* Schools & Educational Institutions
* Teachers & Administrators
* Parents monitoring student performance

---

## 🔒 Security

* JWT-based authentication
* Role-based authorization
* Protected API routes

---

## 📌 Future Enhancements

* 📱 Mobile App Integration
* 🔔 Push Notifications
* 📈 Advanced Analytics Dashboard
* 🧠 AI-based Student Insights

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

Developed by **Bhupendra**
💡 Passionate about building impactful educational technology solutions

---

⭐ *If you like this project, don’t forget to star the repository!*
