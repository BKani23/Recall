import { ToolbarIcons } from "./Icons";

const HEADING_BTNS = ["H₁", "H₂", "H₃"];
const FORMAT_BTNS = [
  { label: "B", style: { fontWeight: 700 } },
  { label: "I", style: { fontStyle: "italic" } },
  { label: "S", style: { textDecoration: "line-through" } },
];

export default function EditorToolbar() {
  return (
    <div className="toolbar">
      {HEADING_BTNS.map((h) => (
        <button key={h} className="toolbar-btn">{h}</button>
      ))}

      <div className="toolbar-sep" />

      {FORMAT_BTNS.map(({ label, style }) => (
        <button key={label} className="toolbar-btn" style={style}>{label}</button>
      ))}

      <div className="toolbar-sep" />

      {ToolbarIcons.map(({ key, icon }) => (
        <button key={key} className="toolbar-btn">{icon}</button>
      ))}
    </div>
  );
}
