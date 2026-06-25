# Recall

A full-stack note-taking application built with the MERN stack. Recall allows users to create, organize, and manage notes efficiently with a clean and responsive interface.

## Features

*  Create, edit, and delete notes
* Search notes instantly
* Pin important notes
* Tag notes for better organization
* Dark mode support
* Markdown support
* Auto-save functionality
* Responsive design

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Folder Structure

```
Recall/
│
├── frontend/
│   ├── src/ #Main source code
│   ├── public/ #Static assets
│   └── package.json  #Frontend dependencies
│
├── backend/# Backend (Node + Express)
│   ├── config/ # Database configuration
│   ├── controllers/ # Route logic (CRUD handlers)
│   ├── models/ # Mongoose schemas
│   ├── routes/ # API routes 
│   ├── server.js/ # Entry point
│   └── package.json # Backend dependencies
│
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/BKani23/Recall.git
cd recall
```

### Install dependencies

#### Client

```bash
cd frontend
npm install
```

#### Server

```bash
cd backend
npm install
```

### Run the application

#### Backend

```bash
npm start
```

#### Frontend

```bash
npm run dev
```

##  Roadmap

* [x] Project setup (MERN structure)
* [x] Backend setup (Express + MongoDB connection)
* [x] CRUD operations (Notes API)
* [x] API testing with Postman
* [x] Frontend setup (React + Vite)
* [x] Connect frontend to backend (Axios integration)
* [x] Search functionality
* [x] Display notes UI (list + cards)
* [x] Dark mode
* [x] Pin notes
* [ ] Create / edit / delete notes from UI
* [ ] Tags support
* [ ] Markdown support
* [ ] Authentication (JWT)
* [ ] Rich text editor
* [ ] Export notes (PDF / TXT)
* [ ] Deploy application (Frontend + Backend)

## License

MIT
