import { useEffect, useRef, useState } from "react";
import { duplicateNote as duplicateNoteApi } from "../services/api";

export default function DropdownMenu({ trigger, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>
        {trigger}
      </div>

      {open && (
        <div className="dropdown-menu">
          {children({ close: () => setOpen(false) })}
        </div>
      )}
    </div>
  );
}