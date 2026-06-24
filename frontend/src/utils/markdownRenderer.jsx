export function renderInline(text) {
     const parts = [];
     let rest = text;
     let key = 0;
   
     while (rest.length > 0) {
       const boldMatch = rest.match(/\*\*(.+?)\*\*/);
       const italicMatch = rest.match(/_(.+?)_/);
       const codeMatch = rest.match(/`(.+?)`/);
   
       const matches = [boldMatch, italicMatch, codeMatch].filter(Boolean);
       if (matches.length === 0) {
         parts.push(<span key={key++}>{rest}</span>);
         break;
       }
   
       const first = matches.reduce((a, b) => (a.index < b.index ? a : b));
       if (first.index > 0) parts.push(<span key={key++}>{rest.slice(0, first.index)}</span>);
   
       if (first === boldMatch) parts.push(<strong key={key++}>{first[1]}</strong>);
       else if (first === italicMatch) parts.push(<em key={key++}>{first[1]}</em>);
       else
         parts.push(
           <code
             key={key++}
             style={{
               background: "var(--surface)",
               padding: "1px 5px",
               borderRadius: 4,
               fontSize: "0.9em",
               fontFamily: "monospace",
             }}
           >
             {first[1]}
           </code>
         );
   
       rest = rest.slice(first.index + first[0].length);
     }
     return parts;
   }
   
   export function renderMarkdown(text) {
     const lines = text.split("\n");
     const elements = [];
     let i = 0;
   
     while (i < lines.length) {
       const line = lines[i];
   
       if (line.startsWith("# ")) {
         elements.push(
           <h1 key={i} style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "var(--text-primary)" }}>
             {renderInline(line.slice(2))}
           </h1>
         );
       } else if (line.startsWith("## ")) {
         elements.push(
           <h2 key={i} style={{ fontSize: 17, fontWeight: 700, margin: "16px 0 8px", color: "var(--text-primary)" }}>
             {renderInline(line.slice(3))}
           </h2>
         );
       } else if (line.startsWith("### ")) {
         elements.push(
           <h3 key={i} style={{ fontSize: 15, fontWeight: 600, margin: "12px 0 6px", color: "var(--text-primary)" }}>
             {renderInline(line.slice(4))}
           </h3>
         );
       } else if (line.startsWith("---")) {
         elements.push(
           <hr key={i} style={{ border: "none", borderTop: "1px solid var(--border)", margin: "16px 0" }} />
         );
       } else if (line.startsWith("> ")) {
         elements.push(
           <blockquote
             key={i}
             style={{
               borderLeft: "3px solid #7c3aed",
               paddingLeft: 16,
               margin: "12px 0",
               color: "var(--text-secondary)",
               fontStyle: "italic",
             }}
           >
             {renderInline(line.slice(2))}
           </blockquote>
         );
       } else if (line.startsWith("- [x] ") || line.startsWith("- [ ] ")) {
         const checked = line.startsWith("- [x] ");
         elements.push(
           <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, margin: "4px 0" }}>
             <div
               style={{
                 width: 16, height: 16, borderRadius: 3,
                 background: checked ? "#22c55e" : "transparent",
                 border: checked ? "none" : "1.5px solid #d1d5db",
                 display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
               }}
             >
               {checked && (
                 <svg width="10" height="8" viewBox="0 0 10 8">
                   <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
               )}
             </div>
             <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{renderInline(line.slice(6))}</span>
           </div>
         );
       } else if (line.startsWith("- ")) {
         elements.push(
           <div key={i} style={{ display: "flex", gap: 8, margin: "3px 0", paddingLeft: 4 }}>
             <span style={{ color: "var(--text-secondary)", marginTop: 2 }}>•</span>
             <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{renderInline(line.slice(2))}</span>
           </div>
         );
       } else if (line.startsWith("```")) {
         const codeLines = [];
         i++;
         while (i < lines.length && !lines[i].startsWith("```")) {
           codeLines.push(lines[i]);
           i++;
         }
         elements.push(
           <pre
             key={i}
             style={{
               background: "var(--surface)",
               border: "1px solid var(--border)",
               borderRadius: 8,
               padding: "12px 16px",
               fontSize: 13,
               fontFamily: "monospace",
               overflowX: "auto",
               margin: "12px 0",
               color: "var(--text-primary)",
             }}
           >
             {codeLines.join("\n")}
           </pre>
         );
       } else if (line === "") {
         elements.push(<div key={i} style={{ height: 8 }} />);
       } else {
         elements.push(
           <p key={i} style={{ margin: "4px 0", fontSize: 14, color: "var(--text-primary)", lineHeight: 1.6 }}>
             {renderInline(line)}
           </p>
         );
       }
       i++;
     }
     return elements;
   }
   