export const TAGS = [
     { name: "Personal", color: "#a855f7", count: 6 },
     { name: "Work", color: "#3b82f6", count: 7 },
     { name: "Ideas", color: "#22c55e", count: 5 },
     { name: "Learning", color: "#f97316", count: 4 },
     { name: "Projects", color: "#ec4899", count: 2 },
   ];
   
   export const NOTES = [
     {
       id: 1,
       title: "Welcome to Recall 👋",
       preview: "Recall is your space to capture ideas, organize thoughts, and never forget...",
       tag: "Personal",
       tagColor: "#a855f7",
       time: "2 mins ago",
       pinned: true,
       content: `# Welcome to **Recall** 👋
   
   Recall is a modern note-taking application built with the **MERN stack**.
   
   You can:
   - [x] Create notes
   - [x] Organize with tags
   - [x] Pin important notes
   - [ ] And much more...
   
   ---
   
   ## Features
   
   - Clean and intuitive UI
   - Markdown support
   - Tagging and pinning
   - Fast and secure
   
   > Capture your thoughts. Organize your life.`,
       tags: ["Personal", "Ideas"],
     },
     {
       id: 2,
       title: "Project Roadmap",
       preview: "Plan and milestones for the Recall MERN stack application.",
       tag: "Work",
       tagColor: "#3b82f6",
       time: "1 hour ago",
       pinned: false,
       content: `# Project Roadmap
   
   Plan and milestones for the Recall MERN stack application.
   
   ## Q1 Goals
   - [ ] Backend API setup
   - [ ] Authentication system
   - [x] Database schema design
   
   ## Q2 Goals
   - [ ] Frontend UI
   - [ ] Rich text editor
   - [ ] Mobile responsiveness`,
       tags: ["Work"],
     },
     {
       id: 3,
       title: "MongoDB Aggregation Notes",
       preview: "$match, $group, $sort, $project and other aggregation operators.",
       tag: "Learning",
       tagColor: "#f97316",
       time: "3 hours ago",
       pinned: false,
       content: `# MongoDB Aggregation Notes
   
   ## Key Operators
   
   - **$match** – Filter documents
   - **$group** – Group by field
   - **$sort** – Sort results
   - **$project** – Shape output
   - **$lookup** – Join collections
   
   ## Example Pipeline
   
   \`\`\`js
   db.orders.aggregate([
     { $match: { status: "completed" } },
     { $group: { _id: "$userId", total: { $sum: "$amount" } } },
     { $sort: { total: -1 } }
   ])
   \`\`\``,
       tags: ["Learning"],
     },
     {
       id: 4,
       title: "UI Ideas",
       preview: "Some minimal and clean UI ideas for the notes app.",
       tag: "Ideas",
       tagColor: "#22c55e",
       time: "Yesterday",
       pinned: false,
       content: `# UI Ideas
   
   Some minimal and clean UI ideas for the notes app.
   
   - Three-panel layout (sidebar, list, editor)
   - Dark/light mode toggle
   - Tag color customization
   - Drag-and-drop reordering
   - Inline markdown preview`,
       tags: ["Ideas"],
     },
     {
       id: 5,
       title: "Daily Journal – 12 May 2024",
       preview: "Today was a productive day. Built the backend APIs.",
       tag: "Personal",
       tagColor: "#a855f7",
       time: "2 days ago",
       pinned: false,
       content: `# Daily Journal – 12 May 2024
   
   Today was a productive day. Built the backend APIs.
   
   ## What I accomplished
   - Set up Express routes
   - Connected MongoDB Atlas
   - Wrote auth middleware
   
   ## Tomorrow's plan
   - Start frontend layout
   - Wire up API calls`,
       tags: ["Personal"],
     },
   ];
   