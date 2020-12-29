# Стартовый шаблон React (на основе CRA + TypeScript)

#### В шаблоне подготовлена и настроена:

-   Структура файлов
-   Axios, класс API c универсальными методами
-   Роутинг с разными стеками для авторизованных/не авторизованных
-   Основные компоненты
-   Основные UI компоненты
-   Mobx 6, пример AuthStore с авторизацией
-   Хук useStores для Mobx stores
-   Базовые типы
-   Базовые утилиты

# Как пользоваться?

1. Клонировать репозиторию
2. Переименовать клонированную папку под названия проекта (обычно это код проекта в gitlab/jira)
3. Установить библиотеки - `yarn install`
4. Запускаем проект - `yarn start` 🙌

# ⚠️ Первоначальная настройка

1. Переименовать:
    - `title` в 'public/index.html'
    - `_tokenStorageKey` в 'src/stores/AuthStore'
2. Актуализировать тему MUI под дизайн проекта в 'src/styles/MuiTheme'. 👉 Подробнее: [https://link] (будет ссылка на инструкцию)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
