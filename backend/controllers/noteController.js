import Note from "../models/Note.js";

// CREATE
export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags || [],
      isPinned: req.body.isPinned === true || req.body.isPinned === "true",
      isDeleted: false
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
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
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

export const duplicateNote = async (req, res) => {
  try {
    const original = await Note.findById(req.params.id);

    if (!original) {
      return res.status(404).json({ message: "Note not found" });
    }

    const copy = new Note({
      title: original.title + " (Copy)",
      content: original.content,
      tags: original.tags,
      isPinned: false,
    });

    const saved = await copy.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};