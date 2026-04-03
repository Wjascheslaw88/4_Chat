FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm ci --only=production

# Копируем остальные файлы
COPY . .

# Открываем порт (узнаем какой порт использует ваш server.js)
EXPOSE 3001

# Запускаем приложение
CMD ["node", "server.js"]