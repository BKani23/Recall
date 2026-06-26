import { useState } from "react";
import { PinIcon, TrashIcon, DotsIcon, PlusIcon } from "./Icons";
import EditorToolbar from "./EditorToolbar";
import TagChip from "./TagChip";
import { renderMarkdown } from "../utils/markdownRenderer";
import { softDeleteNote } from "../services/api";

export default function NoteEditor({note,onDelete,setAllNotes,setTrashNotes,setSelectedNote,
}) {
  
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
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

      {/* Note content */}
      <div className="editor-content">
        <div className="editor-title">{note.title}</div>

        <div className="editor-tags">
          {note.tags?.map((tag) => (
            <TagChip key={tag.name} tag={tag} />
          ))}

          <button className="add-tag-btn">
            <PlusIcon />
            Add tag
          </button>
        </div>

        <div>{renderMarkdown(note.content)}</div>
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
