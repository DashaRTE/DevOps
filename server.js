const express = require("express");
const app = express();

// Використовуємо порт з оточення або 3000 за замовчуванням
const PORT = process.env.PORT || 3000;

// Створюємо базовий ендпоінт "Hello World"
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Hello World from Node.js Express API!",
  });
});

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
