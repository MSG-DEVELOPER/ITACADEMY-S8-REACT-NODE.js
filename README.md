# ITACADEMY-S7-REACT-MONGO_API

> Sample project for Sprint 7 at IT Academy Barcelona. Includes a React frontend (Vite) and a Node.js backend with MongoDB.

---

## 📄 Description

This project aims to practice integrating common plugins and storing their data in a database. It is divided into two main parts:

- **Front-end**: A React application featuring:
  - A top navigation menu with links to: Home, Map, FullCalendar, and Charts.
  - Components for an interactive map (Leaflet), an editable calendar (FullCalendar), and charts (Chart.js).

- **Back-end**: A REST API built with **Node.js** and **Express**, using **MongoDB** for data persistence. It provides endpoints for:
  - Users (generic CRUD).
  - Map locations (latitude and longitude).
  - Calendar events.
  - Sample data for bar and line charts.

---

## 🚀 Technologies Used

### Back-end

- Node.js (v18+)
- Express (v5.1.0)
- Mongoose (v8.16.0)
- dotenv
- cors
- nodemon (development)

### Front-end

- React (v19.1.0)
- Vite
- React Router DOM (v7.6.2)
- styled-components (v6.1.19)
- React Hook Form (v7.58.1)
- @fullcalendar/react, @fullcalendar/daygrid, @fullcalendar/interaction (v6.1.17)
- react-leaflet (v5.0.0) & leaflet (v1.9.4)
- react-chartjs-2 / Chart.js
- TypeScript (~5.8.3)
- ESLint (+ React plugins)

---

## 📝 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **MongoDB** (local or Atlas)
- Code editor (e.g., VSCode)

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/ITACADEMY-S7-REACT-MONGO_API.git
   cd ITACADEMY-S7-REACT-MONGO_API


2. **Configure environment variables**

- Create a .env file inside the server/ folder with the following content:

```env
PORT=4000.
MONGO_URI=mongodb://localhost:27017/itacademy_s7
```
> **Note:**  
> If you’re using MongoDB Atlas, replace the `MONGO_URI` value with your Atlas connection string.

3. **Install dependencies**

*Back-end*

```bash
cd server
npm install
```
*Front-end*
```bash
cd ../client
npm install
```
4. **Run in development mode**

*Back-end*

```bash
cd server
npm run dev
```
The API will be running at [http://localhost:5000](http://localhost:5000).


*Front-end*


```bash
cd client
npm run dev
```
The React app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🚩 Project Structure

```bash

├── server/
│   ├── server.js        # Entry point
│   ├── routes/          # Route definitions (users, locations, events)
│   ├── models/          # Mongoose schemas
│   └── controllers/     # Request handlers
└── client/
    ├── src/
    │   ├── components/  # React components (Menu, Map, Calendar, Charts)
    │   ├── pages/       # Page components for routing
    │   ├── App.jsx      # React Router setup
    │   └── main.jsx     # Vite entry point
    └── public/          # Static assets
```
---

## 📋 API Endpoints

> **Base URL**: http://localhost:5000/api

```bash
| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| GET    | `/users`       | List all users               |
| POST   | `/users`       | Create a new user            |
| GET    | `/users/:id`   | Get user by ID               |
| PUT    | `/users/:id`   | Update user by ID            |
| DELETE | `/users/:id`   | Delete user by ID            |
| GET    | `/locations`   | List map locations           |
| POST   | `/locations`   | Add a new location           |
| GET    | `/events`      | List calendar events         |
| POST   | `/events`      | Create a new event           |
| DELETE | `/events/:id`  | Delete event by ID           |
| GET    | `/stats` | Fetch sample data for charts |
```
---
## 🖼️ Key Features

- **Interactive Map**: View and add locations with latitude and longitude.
- **Calendar**: Create and delete events dynamically.

- **Charts**: Display bar and line charts with dynamic data.

- **Full CRUD**: Endpoints and controllers to manage MongoDB data.

---

## 🤝 Contribuciones

Contributions are welcome! To propose improvements:

Make a fork of the repository.

Create a new branch with your improvement:
git checkout -b feature/new-feature

Make the changes and push them:
git commit -m "Added new feature"
git push origin feature/new-feature

Open a Pull Request on GitHub.

Thank you for checking out this project!
