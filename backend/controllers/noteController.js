import Note from "../models/Note.js";

// CREATE
export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags || [],
      isPinned: req.body.isPinned === true || req.body.isPinned === "true",
      isDeleted : req.body.isDeleted
    });

    res.status(201).json(note);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ isDeleted: false }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// UPDATE
export const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
    });   
    res.json({ message: "Note moved to trash" });
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Trash endpoint
export const getTrashNotes = async (req, res) => {
  try {
    const notes = await Note.find({ isDeleted: true }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};