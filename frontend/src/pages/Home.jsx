import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";
import NoteEditor from "../components/NoteEditor";
import styles from "../styles/styles";
import { getNotes, getTrashNotes } from "../services/api";
import { normalizeNote } from "../utils/normalizeNote";

export default function App() {

  const [activeNav, setActiveNav] = useState("All Notes");
  const [selectedNote, setSelectedNote] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [activeTag, setActiveTag] = useState(null);

  const applyNavFilter = (notes) => {
    switch (activeNav) {
      case "Pinned":
        return notes.filter((n) => n.pinned === true);
  
      case "Trash":
        return notes; //  filtered by API
  
      default:
        return notes;
    }
  };
  // Fetch live notes

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await getNotes();
        const safeNotes = res.data.map(normalizeNote);
  
        setNotes(safeNotes);
        setSelectedNote(safeNotes[0] || null);
      } catch (err) {
        console.error(err);
      }
    };
  
    const fetchTrash = async () => {
      try {
        const res = await getTrashNotes();
        const safeNotes = res.data.map(normalizeNote);
  
        setNotes(safeNotes);
        setSelectedNote(safeNotes[0] || null);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };
  
    if (activeNav === "Trash") fetchTrash();
    else fetchNotes();
  }, [activeNav]);
  // Search filter
  const filteredNotes = applyNavFilter(notes).filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.preview.toLowerCase().includes(search.toLowerCase());
  
    const matchesTag =
      !activeTag || n.tags.some((t) => t.name === activeTag);
  
    return matchesSearch && matchesTag;
  });
  return (
    <>
      <style>{styles}</style>
      <div className="recall-app">
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
          search={search}
          onSearchChange={setSearch}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode((d) => !d)}
          activeTag={activeTag}
          onTagSelect={setActiveTag}
        />

        <NoteList
          notes={filteredNotes}
          selectedNote={selectedNote}
          onSelectNote={setSelectedNote}
        />

        <NoteEditor note={selectedNote} />
      </div>
    </>
  );
}
