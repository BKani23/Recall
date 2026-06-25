import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";
import NoteEditor from "../components/NoteEditor";
import styles from "../styles/styles";
import { getNotes, getTrashNotes } from "../services/api";
import { normalizeNote } from "../utils/normalizeNote";
import CreateNoteModal from "../components/CreateNoteModal";

export default function App() {

  const [activeNav, setActiveNav] = useState("All Notes");
  const [selectedNote, setSelectedNote] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [trashNotes, setTrashNotes] = useState([]); 
  const [activeTag, setActiveTag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch live notes

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getNotes();
        setAllNotes(res.data.map(normalizeNote));
      } catch (err) {
        console.error("All notes error:", err);
      }
    };
  
    fetchAll();
  }, []);
  
  useEffect(() => {
    const fetchTrash = async () => {
      try {
        const res = await getTrashNotes();
        setTrashNotes(res.data.map(normalizeNote));
      } catch (err) {
        console.error("Trash notes error:", err);
      }
    };
  
    fetchTrash();
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const combinedNotes = [...allNotes, ...trashNotes];

  const [draftNote, setDraftNote] = useState({
    title: "",
    content: "",
    tags: [],
    isPinned: false,
  });
  

  const handleCreateClick = () => {
    setDraftNote({
      title: "",
      content: "",
      tags: [],
      isPinned: false,
    });

    setIsModalOpen(true);
  };

  const getNavItems = (notes) => [
    {
      label: "All Notes",
      count: notes.filter((n) => !n.deleted).length,
    },
    {
      label: "Pinned",
      count: notes.filter((n) => n.pinned && !n.deleted).length,
    },
    {
      label: "Trash",
      count: notes.filter((n) => n.deleted).length,
    },
  ];

  const getTags = (notes) => {
    const tagMap = {};

    notes.forEach((note) => {
      if (!note.tags || note.deleted) return;

      note.tags.forEach((tag) => {
        if (!tagMap[tag.name]) {
          tagMap[tag.name] = {
            name: tag.name,
            color: tag.color,
            count: 0,
          };
        }

        tagMap[tag.name].count += 1;
      });
    });

    return Object.values(tagMap);
  };

  const notes = activeNav === "Trash" ? trashNotes : allNotes;

  const navItems = [
    {
      label: "All Notes",
      count: allNotes.filter((n) => !n.deleted).length,
    },
    {
      label: "Pinned",
      count: allNotes.filter((n) => n.pinned && !n.deleted).length,
    },
    {
      label: "Trash",
      count: trashNotes.length,
    },
  ];
  const tags = getTags(combinedNotes);

  // const applyNavFilter = (notes) => {
  //   switch (activeNav) {
  //     case "Pinned":
  //       return notes.filter((n) => n.pinned === true);

  //     case "Trash":
  //       return notes; //  filtered by API

  //     default:
  //       return notes;
  //   }
  // };


  // Search filter
  let baseNotes = activeNav === "Trash" ? trashNotes : allNotes;

  let filtered = baseNotes;
  
  if (activeNav === "Pinned") {
    filtered = filtered.filter((n) => n.pinned && !n.deleted);
  }
  
  const filteredNotes = filtered.filter((n) => {
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
          onCreateNote={handleCreateClick}
          notes={notes}
          navItems={navItems}
          tags={tags}
        />

        <NoteList
          notes={filteredNotes}
          selectedNote={selectedNote}
          onSelectNote={setSelectedNote}
        />

        <NoteEditor note={selectedNote} />

        <CreateNoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          draftNote={draftNote}
          setDraftNote={setDraftNote}
          setAllNotes={setAllNotes}
          setSelectedNote={setSelectedNote}
        />
      </div>
    </>
  );
}
