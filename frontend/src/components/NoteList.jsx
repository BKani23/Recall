import { FilterIcon } from "./Icons";
import NoteCard from "./NoteCard";

export default function NoteList({
  notes,
  selectedNote,
  onSelectNote,
  onTogglePin,
}) {
  return (
    <div className="note-list">
      <div className="note-list-header">
        <div>
          <h2>All Notes</h2>
          <span>{notes.length} notes</span>
        </div>
        <button className="filter-btn">
          <FilterIcon />
        </button>
      </div>

      <div className="note-list-scroll">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isActive={selectedNote?.id === note.id}
            onClick={() => onSelectNote(note)}
            onTogglePin={onTogglePin}
          />
        ))}
      </div>
    </div>
  );
}

