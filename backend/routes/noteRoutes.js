import express from "express";
import {createNote,getNotes,getNoteById,updateNote,deleteNote,getTrashNotes,duplicateNote} from "../controllers/noteController.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/trash", getTrashNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.post("/:id/duplicate", duplicateNote);

export default router;