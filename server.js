const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // Читаємо секрет зі змінних середовища
  const secretKey =
    process.env.API_SECRET_KEY || "Секрет не знайдено (локальний запуск)";

  res.json({
    status: "success",
    message: "Hello World from Node.js Express API!",
    secret: secretKey,
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
