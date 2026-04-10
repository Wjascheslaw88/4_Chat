const express = require('express');
const cors = require('cors');
const {findUsrersByChatName, findChatName, createNewChat, creatNewMessage, findMessagesByChatName } = require('./data')
require('dotenv').config();
const { WebSocketServer } = require('ws');
const http = require('http')

// Создаем приложение Express
const app = express();

// Определяем порт (из .env или 3000 по умолчанию)
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

// Middleware
app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(express.json()); // Парсим JSON из запросов
////////////////// WebSocket //////////////////////////////////////////////
const server = http.createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', (ws)=> {
  ws.on("message", (Data)=> {
    const data = JSON.parse(Data) 
    if (data.type === "getMessages") {
      const messages = findMessagesByChatName(data.chatName)
      ws.send(JSON.stringify({type: "getMessagesResult", messages: messages}))
    }
    if (data.type === "newMessage") {
      const newMessage = creatNewMessage(data.text, data.chatName, data.author)
      ws.send(JSON.stringify({type:"newMessageResult", message: newMessage}))
    }
  })
})
////////////////// HTTP запросы ///////////////////////////////////////////
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

// app.post ('/NewMessage',(req, res)=>{
//   const text = req.body.text
//   const chatName = req.body.chatName
//   const author = req.body.author
//   const newMessage = creatNewMessage(text,chatName,author)
//   return newMessage
// })

// app.get ('/messageByChatName', (req, res) =>{
//   const chatName = req.query.chatName; 
//   const message = findMessagesByChatName(chatName)
//   res.json(message);
// })

app.get('/api/users', (req, res) => {
    const users = findAllUsers();
    res.json(users);
});
/////
// Маршрут для /chat1/:id (фронтенд отправляет запросы в таком формате)
app.get('/chat1/:id', (req, res) => {
  const chatId = req.params.id;
  console.log(`Запрос чата по ID: ${chatId}`);
  
  // Используем существующую функцию findChatName
  const chat = findChatName(chatId);
  
  if (chat) {
    res.json(chat);
  } else {
    res.status(404).json({ error: 'Chat not found' });
  }
});
// Запускаем сервер
server.listen(PORT, HOST, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
})