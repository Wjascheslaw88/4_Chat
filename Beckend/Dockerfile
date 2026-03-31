FROM node:18-alpine

# Устанавливаем русскую локаль (опционально, если нужно)
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    echo "Europe/Moscow" > /etc/timezone

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