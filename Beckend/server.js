const express = require('express');
const cors = require('cors');
const chat1 = require('./chat1')
const chat2 = require('./chat2')
require('dotenv').config();

// Создаем приложение Express
const app = express();

// Определяем порт (из .env или 3000 по умолчанию)
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(express.json()); // Парсим JSON из запросов

// Базовый маршрут для проверки

app.get('/chat1', (req, res) => {
  res.json(chat1);
});
app.get('/chat2', (req, res) => {
  res.json(chat2);
});

// Тестовый маршрут для чата
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Пока просто возвращаем эхо-ответ
  res.json({
    reply: `Вы сказали: "${message}". Здесь будет ответ от AI`,
    timestamp: new Date().toISOString()
  });
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📝 Тестовый маршрут: http://localhost:${PORT}`);
  console.log(`💬 API чата: http://localhost:${PORT}/api/chat`);
});