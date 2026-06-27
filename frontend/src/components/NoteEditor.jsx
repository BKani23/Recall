import { useState } from "react";
import { PinIcon, TrashIcon, DotsIcon, PlusIcon } from "./Icons";
import EditorToolbar from "./EditorToolbar";
import TagChip from "./TagChip";
import { renderMarkdown } from "../utils/markdownRenderer";
import { softDeleteNote } from "../services/api";
import { useEffect } from "react";
import { updateNote } from "../services/api";

export default function NoteEditor({
  note,
  onDelete,
  setAllNotes,
  setTrashNotes,
  setSelectedNote,
}) {
  const [saved, setSaved] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
    }
  }, [note]);
  async function handleSave() {
    try {
      const updatedData = {
        title,
        content,
        tags: note.tags.map((t) => t.name), // convert UI → DB format
        isPinned: note.pinned,
      };
  
      const { data: updatedNote } = await updateNote(note.id, updatedData);
  
      setAllNotes((prev) =>
        prev.map((n) => (n.id === note.id ? updatedNote : n))
      );
  
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch (err) {
      console.error("Failed to update note:", err);
    }
  }
  const handleDelete = async () => {
    try {
      const { data: deletedNote } = await softDeleteNote(note.id);
      console.log(deletedNote);

      setAllNotes((prev) => prev.filter((n) => n.id !== deletedNote.id));

      setTrashNotes((prev) => [deletedNote, ...prev]);

      setSelectedNote(null);
    } catch (err) {
      console.error(err);
    }
  };

  if (!note) return null;

  return (
    <div className="editor-panel">
      {/* Top action bar */}
      <div className="editor-topbar">
        <button className="editor-icon-btn" title="Pin">
          <PinIcon active={note.pinned} />
        </button>
        <button
          className="editor-icon-btn"
          title="Delete"
          onClick={handleDelete}
        >
          <TrashIcon />
        </button>
        <button className="editor-icon-btn" title="More">
          <DotsIcon />
        </button>
      </div>

      {/* Formatting toolbar */}
      <EditorToolbar />

      <button
        className="editor-icon-btn"
        onClick={() => setIsEditing((v) => !v)}
      >
        {isEditing ? "Preview" : "Edit"}
      </button>

      {/* Note content */}
      <div className="editor-content">
        {isEditing ? (
          <textarea
            className="editor-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={1}
            style={{
              width: "100%",
              fontSize: 22,
              fontWeight: 700,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "var(--text-primary)",
              resize: "none",
            }}
          />
        ) : (
          <div className="editor-title">{title}</div>
        )}

        <div className="editor-tags">
          {note.tags?.map((tag) => (
            <TagChip key={tag.name} tag={tag} />
          ))}

          <button className="add-tag-btn">
            <PlusIcon />
            Add tag
          </button>
        </div>

        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="editor-textarea"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 14,
              color: "var(--text-primary)",
              lineHeight: 1.6,
              fontFamily: "inherit",
              resize: "none",
            }}
          />
        ) : (
          <div>{renderMarkdown(content)}</div>
        )}
      </div>

      {/* Footer */}
      <div className="editor-footer">
        <span className="editor-footer-meta">Last updated: {note.time}</span>
        <button className="save-btn" onClick={handleSave}>
          {saved ? "Saved ✓" : "Save"}
        </button>
      </div>
    </div>
  );
}
