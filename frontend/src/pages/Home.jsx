import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";
import NoteEditor from "../components/NoteEditor";
import styles from "../styles/styles";
import { getNotes } from "../services/api";

export default function App() {
  
  const [activeNav, setActiveNav] = useState("All Notes");
  const [selectedNote, setSelectedNote] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  // Fetch live notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await getNotes();
        setNotes(res.data);
        setSelectedNote(res.data[0] || null);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };

    fetchNotes();
  }, []);

  // Search filter
  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.preview.toLowerCase().includes(search.toLowerCase())
  );


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



 

