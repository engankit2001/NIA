import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database('nia.db');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    membershipType TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date DATETIME NOT NULL,
    location TEXT NOT NULL,
    type TEXT CHECK(type IN ('upcoming', 'past')) NOT NULL,
    price REAL DEFAULT 0,
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial data if empty
const eventCount = db.prepare('SELECT COUNT(*) as count FROM events').get() as { count: number };
if (eventCount.count === 0) {
  const insertEvent = db.prepare('INSERT INTO events (title, description, date, location, type, price, image) VALUES (?, ?, ?, ?, ?, ?, ?)');
  insertEvent.run('Diwali Celebration 2025', 'Join us for a grand celebration of lights with traditional food and dance.', '2025-11-01', 'Amsterdam RAI', 'upcoming', 25, 'https://picsum.photos/seed/diwali/800/600');
  insertEvent.run('Holi Festival 2025', 'Experience the festival of colors in the heart of Utrecht.', '2025-03-20', 'Griftpark, Utrecht', 'upcoming', 15, 'https://picsum.photos/seed/holi/800/600');
  insertEvent.run('Indian Classical Music Night', 'An evening of soulful ragas by renowned artists.', '2024-12-15', 'Concertgebouw, Amsterdam', 'past', 40, 'https://picsum.photos/seed/music/800/600');
}

const blogCount = db.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number };
if (blogCount.count === 0) {
  const insertBlog = db.prepare('INSERT INTO blog_posts (title, content, author, image) VALUES (?, ?, ?, ?)');
  insertBlog.run('The Growing Indo-Dutch Community', 'Exploring the rich history and future of the Indian diaspora in the Netherlands...', 'Admin', 'https://picsum.photos/seed/blog1/800/600');
  insertBlog.run('Top 5 Indian Restaurants in Den Haag', 'A culinary journey through the best spots for authentic Indian cuisine...', 'Foodie Member', 'https://picsum.photos/seed/blog2/800/600');
}

export default db;
