const express = require("express");
const path = require("path");
const notes = require("./data/notes.json");

const app = express();
const PORT = process.env.PORT || 3000;
// Роздача статичних файлів (index.html, css, js) з теки public
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/notes", (req, res) => {
  const { subject } = req.query;

  // Параметра немає: повертаємо весь список
  if (subject === undefined) {
    return res.json(notes);
  }

  const filtered = notes.filter(
    (note) => note.subject.toLowerCase() === String(subject).toLowerCase(),
  );
  // Нічого не знайдено: 404 з повідомленням у JSON
  if (filtered.length === 0) {
    return res
      .status(404)
      .json({ error: `Конспектів з предмета "${subject}" не знайдено` });
  }

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
// Усі інші шляхи: 404 у форматі JSON (має стояти після всіх маршрутів)
app.use((req, res) => {
  res.status(404).json({ error: `Шлях ${req.originalUrl} не знайдено` });
});
