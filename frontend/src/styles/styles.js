const styles = `
  :root {
    --purple: #7c3aed;
    --purple-light: #ede9fe;
    --bg: #f9fafb;
    --surface: #f3f4f6;
    --surface-hover: #e9eaf0;
    --white: #ffffff;
    --border: #e5e7eb;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --text-muted: #9ca3af;
    --sidebar-width: 220px;
    --list-width: 280px;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

  .recall-app {
    display: flex;
    height: 100vh;
    background: var(--bg);
    overflow: hidden;
  }

  /* SIDEBAR */
  .sidebar {
    width: var(--sidebar-width);
    background: var(--white);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    flex-shrink: 0;
  }
  .sidebar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px 16px;
  }
  .logo-icon {
    width: 32px; height: 32px;
    background: var(--purple);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 14px; font-weight: 700;
  }
  .logo-text { font-size: 18px; font-weight: 700; color: var(--text-primary); }
  .new-note-btn {
    margin: 0 12px 12px;
    padding: 8px 0;
    background: var(--purple);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    transition: background 0.15s;
  }
  .new-note-btn:hover { background: #6d28d9; }
  .sidebar-search {
    margin: 0 12px 8px;
    display: flex; align-items: center; gap: 8px;
    background: var(--surface);
    border-radius: 8px;
    padding: 7px 10px;
  }
  .sidebar-search input {
    border: none; background: transparent; outline: none;
    font-size: 13px; color: var(--text-primary); flex: 1;
  }
  .sidebar-search input::placeholder { color: var(--text-muted); }
  .sidebar-kbd {
    font-size: 10px; color: var(--text-muted);
    background: var(--border); border-radius: 4px; padding: 1px 4px;
  }
  .nav-section { padding: 0 8px; margin-bottom: 8px; }
  .nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 7px 8px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 13px;
    color: var(--text-secondary);
    transition: background 0.12s;
    user-select: none;
  }
  .nav-item:hover { background: var(--surface); }
  .nav-item.active { background: var(--purple-light); color: var(--purple); font-weight: 600; }
  .nav-item .count {
    margin-left: auto;
    font-size: 12px;
    color: var(--text-muted);
    font-weight: 500;
  }
  .nav-item.active .count { color: var(--purple); }
  .section-label {
    padding: 8px 16px 4px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .tag-dot {
    width: 8px; height: 8px; border-radius: 50%;
  }
  .sidebar-footer {
    margin-top: auto;
    border-top: 1px solid var(--border);
    padding: 12px 12px 0;
  }
  .dark-mode-row {
    display: flex; align-items: center; gap: 8px;
    padding: 6px 4px;
    font-size: 13px; color: var(--text-secondary);
  }
  .dark-mode-row span { margin-right: auto; }
  .toggle {
    width: 36px; height: 20px;
    background: var(--border); border-radius: 10px;
    position: relative; cursor: pointer; transition: background 0.2s;
  }
  .toggle::after {
    content: ''; position: absolute;
    width: 14px; height: 14px;
    background: white; border-radius: 50%;
    top: 3px; left: 3px; transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
  .toggle.on { background: var(--purple); }
  .toggle.on::after { left: 19px; }
  .user-row {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 4px;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 2px;
  }
  .user-avatar {
    width: 30px; height: 30px;
    background: var(--purple); color: white;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700;
  }
  .user-info { flex: 1; min-width: 0; }
  .user-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
  .user-email { font-size: 11px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* NOTE LIST */
  .note-list {
    width: var(--list-width);
    border-right: 1px solid var(--border);
    background: var(--white);
    display: flex; flex-direction: column;
    flex-shrink: 0;
    overflow: hidden;
  }
  .note-list-header {
    padding: 16px 16px 12px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
  }
  .note-list-header h2 { font-size: 16px; font-weight: 700; color: var(--text-primary); }
  .note-list-header span { font-size: 12px; color: var(--text-muted); }
  .filter-btn {
    background: none; border: none; cursor: pointer; color: var(--text-muted);
    padding: 4px; border-radius: 4px;
  }
  .filter-btn:hover { background: var(--surface); }
  .note-list-scroll { overflow-y: auto; flex: 1; padding: 8px; }
  .note-card {
    padding: 12px;
    border-radius: 10px;
    border: 1.5px solid transparent;
    cursor: pointer;
    margin-bottom: 4px;
    transition: border-color 0.12s, background 0.12s;
  }
  .note-card:hover { background: var(--surface); }
  .note-card.active { border-color: var(--purple); background: #faf8ff; }
  .note-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  .note-card-title { font-size: 14px; font-weight: 600; color: var(--text-primary); }
  .note-card-preview { font-size: 12px; color: var(--text-secondary); margin: 4px 0 8px; line-height: 1.5; }
  .note-card-bottom { display: flex; align-items: center; justify-content: space-between; }
  .tag-chip {
    font-size: 11px; font-weight: 500;
    padding: 2px 8px; border-radius: 20px;
    border: 1px solid;
  }
  .note-time { font-size: 11px; color: var(--text-muted); }
  .pin-btn { background: none; border: none; cursor: pointer; padding: 2px; line-height: 0; }

  /* EDITOR */
  .editor-panel {
    flex: 1; display: flex; flex-direction: column; min-width: 0;
    background: var(--white);
  }
  .editor-topbar {
    display: flex; align-items: center; justify-content: flex-end;
    gap: 8px; padding: 14px 20px;
    border-bottom: 1px solid var(--border);
  }
  .editor-icon-btn {
    background: none; border: none; cursor: pointer;
    color: var(--text-muted); padding: 4px; border-radius: 5px;
    line-height: 0;
  }
  .editor-icon-btn:hover { background: var(--surface); color: var(--text-secondary); }
  .editor-content { flex: 1; overflow-y: auto; padding: 24px 32px; }
  .editor-title { font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
  .editor-tags { display: flex; align-items: center; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
  .add-tag-btn {
    background: none; border: none; cursor: pointer;
    font-size: 12px; color: var(--text-muted);
    display: flex; align-items: center; gap: 3px;
  }
  .toolbar {
    display: flex; align-items: center; gap: 1px;
    padding: 8px 16px;
    border-bottom: 1px solid var(--border);
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .toolbar-btn {
    background: none; border: none; cursor: pointer;
    color: var(--text-secondary); font-size: 12px; font-weight: 600;
    padding: 5px 7px; border-radius: 5px; line-height: 1;
  }
  .toolbar-btn:hover { background: var(--surface); }
  .toolbar-sep { width: 1px; height: 16px; background: var(--border); margin: 0 4px; }
  .editor-footer {
    display: flex; align-items: center; justify-content: flex-end;
    gap: 16px; padding: 12px 20px;
    border-top: 1px solid var(--border);
  }
  .editor-footer-meta { font-size: 12px; color: var(--text-muted); }
  .save-btn {
    background: var(--purple); color: white;
    border: none; cursor: pointer;
    font-size: 13px; font-weight: 600;
    padding: 8px 20px; border-radius: 8px;
    transition: background 0.15s;
  }
  .save-btn:hover { background: #6d28d9; }

  .modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  /* animation */
  animation: fadeIn 0.15s ease-out;
}

.modal {
  width: 420px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* animation */
  animation: popIn 0.18s ease-out;
  transform-origin: center;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* nicer inputs */
.modal input,
.modal textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  outline: none;
  transition: border 0.2s ease;
}

.modal input:focus,
.modal textarea:focus {
  border-color: #6366f1;
}

.modal-actions{
display : flex;
justify-content: space-between;}

/* buttons */
.modal-actions button {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.modal-actions button:first-child {
  background: #aab0bc;
}

.modal-actions button:last-child {
  background: #6366f1;
  color: white;
}

.pin-label{
display : flex;
justify-content: space-around;
}

.pin-label input{
width : 16px
}

`;

export default styles;
