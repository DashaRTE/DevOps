# Етап 1: Збірка та встановлення залежностей (Builder stage)
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо файли конфігурації залежностей
COPY package*.json ./

# Встановлюємо всі залежності (вкл. devDependencies, якщо вони є)
RUN npm ci

# Етап 2: Фінальний мінімальний образ (Production stage)
FROM node:20-alpine

WORKDIR /app

# Переводимо Node.js у режим production для оптимізації роботи Express
ENV NODE_ENV=production

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо ТІЛЬКИ продакшн-залежності, щоб мінімізувати вагу образу
# та очищаємо кеш npm
RUN npm ci --omit=dev && npm cache clean --force

# Копіюємо вихідний код застосунку (без node_modules, якщо є .dockerignore)
COPY . .

# Змінюємо користувача з root на непривілейованого 'node' з міркувань безпеки
USER node

# Вказуємо порт, який слухає застосунок
EXPOSE 3000

# Робочий entrypoint для запуску
ENTRYPOINT ["node", "server.js"]
