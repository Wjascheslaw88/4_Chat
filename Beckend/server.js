const express = require('express');
const cors = require('cors');
const {findUsrersByChatName, findChatName, createNewChat, creatNewMessage, findMessagesByChatName } = require('./data')
require('dotenv').config();

// Создаем приложение Express
const app = express();

// Определяем порт (из .env или 3000 по умолчанию)
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

// Middleware
app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(express.json()); // Парсим JSON из запросов

// http://localhost:3001/users?chatName={}
app.get('/users', (req, res) => {
  const chatName = req.query.chatName; 
  const users = findUsrersByChatName(chatName)
  res.json(users);
});

app.post ('/newchat', (req, res)=> {
  const chatName = req.body.chatName;
  const userName = req.body.userName;
  const newChat = createNewChat(chatName, userName)
  res.json(newChat)
})

app.get('/chat/:chatName', (req, res) =>{
  const chatName = req.params.chatName;
  const chat = findChatName(chatName)
  if (chat) {
    res.json(chat);
  } else {
    res.status(404).json({ error: 'Chat not found' });
  }
});

app.post ('/NewMessage',(req, res)=>{
  const text = req.body.text
  const chatName = req.body.chatName
  const author = req.body.author
  const newMessage = creatNewMessage(text,chatName,author)
  return newMessage
})

app.get ('/messageByChatName', (req, res) =>{
  const chatName = req.query.chatName; 
  const message = findMessagesByChatName(chatName)
  res.json(message);
})

app.get('/api/users', (req, res) => {
    const users = findAllUsers();
    res.json(users);
});


// Запускаем сервер
app.listen(PORT, HOST, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📝 Тестовый маршрут: http://localhost:${PORT}`);
  console.log(`💬 API чата: http://localhost:${PORT}/api/chat`);
});