import axios from "axios";

// Base URL of  backend
const API = axios.create({
  baseURL: "http://localhost:3000/api/notes",
});

export const createNote = (data) => API.post("/", data);

export const getNotes = () => API.get("/");

export const getTrashNotes = () => API.get("/trash");


export const getNoteById = (id) => API.get(`/${id}`);

export const updateNote = (id, data) => API.put(`/${id}`, data);

export const deleteNote = (id) => API.delete(`/${id}`);

export const softDeleteNote = (id) => API.put(`/${id}`, { isDeleted: true });