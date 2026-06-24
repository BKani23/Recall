import { useState } from "react";
import { NOTES } from "../data/constants";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";
import NoteEditor from "../components/NoteEditor";
import styles from "../styles/styles";

export default function App() {
  
  const [activeNav, setActiveNav] = useState("All Notes");
  const [selectedNote, setSelectedNote] = useState(NOTES[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const filteredNotes = NOTES.filter(
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


