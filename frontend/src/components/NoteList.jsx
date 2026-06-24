import { FilterIcon } from "./Icons";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, selectedNote, onSelectNote }) {
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
          />
        ))}
      </div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { getNotes } from "../services/api";
// import NoteCard from "./NoteCard";

// function NotesList() {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   async function fetchNotes() {
//     try {
//       const response = await getNotes();
//       setNotes(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <h1>All Notes</h1>

//       {notes.length === 0 ? (
//         <p>No notes found.</p>
//       ) : (
//         notes.map((note) => <NoteCard key={note._id} note={note} />)
//       )}
//     </div>
//   );
// }

// export default NotesList;