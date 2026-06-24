import { resolveTag } from "./resolveTag";

export function normalizeNote(note) {
  const content = note.content ?? "";

  const safeTags = (note.tags || [])
    .map(resolveTag)
    .filter(Boolean);

  return {
    id: note._id,
    title: note.title ?? "",
    content,

    preview:
      content.trim().length > 0
        ? content.trim().slice(0, 80) +
          (content.length > 80 ? "..." : "")
        : "No content yet",

    tags: safeTags,

    pinned: Boolean(note.isPinned),

    time: new Date(note.updatedAt || note.createdAt).toLocaleString(),
  };
}