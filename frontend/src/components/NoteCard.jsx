import { PinIcon } from "./Icons";
import TagChip from "./TagChip";

export default function NoteCard({ note, isActive, onClick }) {
  return (
    <div
      className={`note-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="note-card-top">
        <span className="note-card-title">{note.title}</span>
        <button className="pin-btn">
          <PinIcon active={note.pinned} />
        </button>
      </div>
      <div className="note-card-preview">{note.preview}</div>
      <div className="note-card-bottom">
        <TagChip tag={note.tags?.[0]} />
        <span className="note-time">{note.time}</span>
      </div>
    </div>
  );
}
