export default function TagChip({ tag }) {
  if (!tag) return null;

  return (
    <span
      className="tag-chip"
      style={{
        color: tag.color,
        borderColor: tag.color + "44",
        background: tag.color + "18",
      }}
    >
      {tag.name}
    </span>
  );
}