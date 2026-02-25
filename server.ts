import express from "express";
import { createServer as createViteServer } from "vite";
import db from "./db.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/events", (req, res) => {
    const events = db.prepare("SELECT * FROM events ORDER BY date DESC").all();
    res.json(events);
  });

  app.get("/api/blog", (req, res) => {
    const posts = db.prepare("SELECT * FROM blog_posts ORDER BY date DESC").all();
    res.json(posts);
  });

  app.post("/api/membership", (req, res) => {
    const { firstName, lastName, email, membershipType } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO members (firstName, lastName, email, membershipType) VALUES (?, ?, ?, ?)");
      stmt.run(firstName, lastName, email, membershipType);
      res.status(201).json({ message: "Membership registered successfully" });
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        res.status(400).json({ error: "Email already registered" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
      stmt.run(name, email, subject, message);
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
