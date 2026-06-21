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
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
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
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

### Run the application

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

## Roadmap

##  Roadmap

* [x] Project setup (MERN structure)
* [x] Backend setup (Express + MongoDB connection)
* [x] CRUD operations (Notes API)
* [x] API testing with Postman

* [ ] Frontend setup (React + Vite)
* [ ] Connect frontend to backend (Axios integration)
* [ ] Display notes UI (list + cards)
* [ ] Create / edit / delete notes from UI

* [ ] Search functionality
* [ ] Tags support
* [ ] Pin notes
* [ ] Markdown support
* [ ] Dark mode

* [ ] Authentication (JWT)
* [ ] Rich text editor
* [ ] Export notes (PDF / TXT)

* [ ] Deploy application (Frontend + Backend)

## License

MIT
