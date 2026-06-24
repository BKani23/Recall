export function normalizeNote(note) {
     const content = note.content ?? "";
   
     return {
       id: note._id,
       title: note.title ?? "",
       content,
       preview:
         content.trim().length > 0
           ? content.trim().slice(0, 80) +
             (content.length > 80 ? "..." : "")
           : "No content yet",
   
       tags: Array.isArray(note.tags) ? note.tags : [],
       pinned: Boolean(note.isPinned),
       time: new Date(note.updatedAt || note.createdAt).toLocaleString(),
     };
   }