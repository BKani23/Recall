import { TAGS } from "../data/constants";

export default function TagChip({ name }) {
  const tag = TAGS.find((t) => t.name === name);
  return (
    <span
      className="tag-chip"
      style={{
        color: tag?.color,
        borderColor: tag?.color + "44",
        background: tag?.color + "18",
      }}
    >
      {name}
    </span>
  );
}
