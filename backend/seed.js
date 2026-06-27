import mongoose from "mongoose";
import Note from "./models/Note.js";
import dotenv from "dotenv";

dotenv.config();
const notes = [
  {
    title: "Startup Idea: AI Study Assistant",
    content:
      "Build an AI tool that summarizes notes, generates flashcards, and creates quizzes from documents.",
    tags: ["Ideas"],
    isPinned: true,
  },
  {
    title: "Workout Plan",
    content:
      "Push, Pull, Legs split with rest on Sunday. Focus on progressive overload.",
    tags: ["Health"],
    isPinned: false,
  },
  {
    title: "React Hooks Revision",
    content:
      "useState, useEffect, useMemo, useCallback and custom hooks patterns.",
    tags: ["Learning"],
    isPinned: true,
  },
  {
    title: "Meeting Notes - Client A",
    content:
      "Discussed project timeline, budget approval pending, next meeting Friday.",
    tags: ["Meeting", "Work"],
    isPinned: false,
  },
  {
    title: "App Feature Ideas",
    content:
      "Add dark mode, drag-and-drop notes, and voice-to-text input.",
    tags: ["Ideas", "Projects"],
    isPinned: false,
  },
  {
    title: "Travel Plan: Cape Town",
    content:
      "Visit Table Mountain, V&A Waterfront, and Cape Point over 4 days.",
    tags: ["Travel"],
    isPinned: false,
  },
  {
    title: "Urgent Tasks Today",
    content: "Fix bugs, submit assignment, and prepare API documentation.",
    tags: ["Urgent", "Work"],
    isPinned: true,
  },
  {
    title: "Health Routine",
    content: "Drink 2L water, 30 min walk, reduce sugar intake.",
    tags: ["Health"],
    isPinned: false,
  },
  {
    title: "Learning Node.js",
    content:
      "Understand Express middleware, routing, and MongoDB integration.",
    tags: ["Learning"],
    isPinned: false,
  },
  {
    title: "Project Alpha Planning",
    content:
      "Define MVP, set milestones, assign tasks to team members.",
    tags: ["Projects", "Work"],
    isPinned: true,
  },
  {
    title: "Book Ideas",
    content: "Write a sci-fi story about AI controlling digital worlds.",
    tags: ["Ideas"],
    isPinned: false,
  },
  {
    title: "Frontend Checklist",
    content:
      "Responsive UI, accessibility, API integration, error handling.",
    tags: ["Work"],
    isPinned: false,
  },
  {
    title: "Gym Progress Tracking",
    content: "Bench press: 60kg, Squat: 80kg, Deadlift: 100kg.",
    tags: ["Health"],
    isPinned: false,
  },
  {
    title: "Startup Monetization Ideas",
    content:
      "Subscription model, freemium features, ads for free users.",
    tags: ["Ideas"],
    isPinned: true,
  },
  {
    title: "Daily Journal",
    content:
      "Today I focused on building my notes app and fixed major bugs.",
    tags: ["Personal"],
    isPinned: false,
  },
  {
    title: "Study Schedule",
    content:
      "Morning: coding, Afternoon: theory, Evening: revision.",
    tags: ["Learning"],
    isPinned: false,
  },
  {
    title: "Client Feedback Summary",
    content:
      "Improve UI speed, add search filters, fix mobile layout issues.",
    tags: ["Work", "Meeting"],
    isPinned: false,
  },
  {
    title: "Side Project Ideas",
    content: "Expense tracker, habit builder, AI chat assistant.",
    tags: ["Projects", "Ideas"],
    isPinned: true,
  },
  {
    title: "Travel Bucket List",
    content: "Japan, Italy, Canada, Iceland.",
    tags: ["Travel"],
    isPinned: false,
  },
  {
    title: "Focus Routine",
    content:
      "Pomodoro 25/5, no phone distractions, deep work sessions.",
    tags: ["Personal", "Health"],
    isPinned: false,
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to MongoDB");

    await Note.deleteMany({});
    console.log(" Cleared existing notes");

    const inserted = await Note.insertMany(notes);
    console.log(`Seeded ${inserted.length} notes`);

    mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error("Seeding failed:", err);
    mongoose.connection.close();
  }
}

seedDB();