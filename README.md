# DevOps Project

Короткий опис

Цей репозиторій містить простий Node.js сервер та інфраструктуру для локальної розробки, контейнеризації і CI.

**Ключові файли**
- [server.js](server.js) — точка входу сервера
- [package.json](package.json) — залежності та скрипти
- [Dockerfile](Dockerfile) — образ додатку
- [docker-compose.yml](docker-compose.yml) — локальна оркестрація сервісів
- [.github/workflows/ci.yml](.github/workflows/ci.yml) — CI-пайплайн

## Архітектура

1. Один сервіс — Node.js сервер у `server.js`.
2. Додаток запускається локально через `npm start` або в Docker-контейнері.
3. CI перевіряє тести та лінт при кожному PR/merge за допомогою GitHub Actions.

## Технічний стек

- Node.js
- npm
- Docker
- GitHub Actions

## Швидкий старт для розробника

Передумови:

- Встановлений Node.js (v16+ рекомендовано)
- Встановлений Docker (для контейнерного запуску)

Інструкції локального запуску:

```bash
# Встановити залежності
npm install

# Запустити сервер у режимі розробки
npm start

# Запустити тести
npm test
```

## Docker

```bash
# Зібрати образ
docker build -t devops-project:local .

# Запустити через docker-compose
docker-compose up --build
```

## CI

CI-конфігурація знаходиться в [.github/workflows/ci.yml](.github/workflows/ci.yml). Пайплайн виконує наступне:

- Встановлення залежностей
- Запуск лінтера
- Прогін тестів
