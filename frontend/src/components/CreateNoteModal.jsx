import { useState, useEffect } from "react";
import { createNote } from "../services/api";
import { normalizeNote } from "../utils/normalizeNote";

export default function CreateNoteModal({ isOpen,onClose,draftNote,setDraftNote,setNotes,setSelectedNote}) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDraftNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await createNote(draftNote);
      const newNote = normalizeNote(res.data);

      setNotes((prev) => [newNote, ...prev]);
      setSelectedNote(newNote);

      onClose();
    } catch (err) {
      console.error("Create note failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Create Note</h2>

        <input
          name="title"
          placeholder="Title"
          value={draftNote.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Content"
          value={draftNote.content}
          onChange={handleChange}
        />

        <input
          name="tags"
          placeholder="Tags (comma separated)"
          value={draftNote.tags.join(", ")}
          onChange={(e) =>
            setDraftNote((p) => ({
              ...p,
              tags: e.target.value.split(",").map((t) => t.trim()),
            }))
          }
        />

        <label className="pin-label">
        <span>Pin note</span>

          <input
            type="checkbox"
            checked={draftNote.isPinned}
            onChange={(e) =>
              setDraftNote((p) => ({
                ...p,
                isPinned: e.target.checked,
              }))
            }
          />
        </label>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
