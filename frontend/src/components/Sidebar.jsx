import {SearchIcon,MoonIcon,PlusIcon,NavIcons,ChevronDownIcon} from "./Icons";
import { TAGS } from "../data/constants";

const NAV_ITEMS = [
  { label: "All Notes", count: 24 },
  { label: "Pinned", count: 6 },
  { label: "Trash", count: 2 },
];

export default function Sidebar({activeNav,onNavChange,search,onSearchChange,darkMode,onDarkModeToggle,activeTag,
  onTagSelect,onCreateNote}) {
  return (

    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">R</div>
        <span className="logo-text">Recall</span>
      </div>

      {/* New Note Button */}
      <button className="new-note-btn" onClick={onCreateNote}>
        <PlusIcon />
        New Note
      </button>

      {/* Search */}
      <div className="sidebar-search">
        <SearchIcon />
        <input
          placeholder="Search notes..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="sidebar-kbd">⌘K</span>
      </div>

      {/* Navigation */}
      <div className="nav-section">
        {NAV_ITEMS.map(({ label, count }) => {
          const Icon = NavIcons[label];
          return (
            <div
              key={label}
              className={`nav-item ${activeNav === label ? "active" : ""}`}
              onClick={() => onNavChange(label)}
            >
              <Icon />
              {label}
              <span className="count">{count}</span>
            </div>
          );
        })}
      </div>

      {/* Tags */}
      <div className="section-label">Tags</div>
      <div className="nav-section">
        {TAGS.map((tag) => (
          <div
            key={tag.name}
            className={`nav-item ${activeTag === tag.name ? "active" : ""}`}
            onClick={() =>
              onTagSelect(activeTag === tag.name ? null : tag.name)
            }
          >
            <span className="tag-dot" style={{ background: tag.color }} />
            {tag.name}
            <span className="count">{tag.count}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="dark-mode-row">
          <MoonIcon />
          <span>Dark Mode</span>
          <div
            className={`toggle ${darkMode ? "on" : ""}`}
            onClick={onDarkModeToggle}
          />
        </div>
        <div className="user-row">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <div className="user-name">Kani Bulelani</div>
            <div className="user-email">bulelanikani23@gmail.com</div>
          </div>
          <ChevronDownIcon />
        </div>
      </div>
    </aside>
  );
}
