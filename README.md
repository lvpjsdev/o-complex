## Как запустить проект

1. Установите зависимости:

```bash
npm install
```

2. Запустите сервер разработки:

```bash
npm run dev
```

3. Откройте в браузере [http://localhost:3000](http://localhost:3000) или другой адрес указаный в терминале, чтобы увидеть результат.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Используемые технологии

В проекте использовались следующие технологии:

- **Next.js** — основной фреймворк
- **Tailwind CSS** — для стилизации
- **zustand** — для управления состоянием
- **@react-input/mask** — для маски ввода номера телефона
- **sonner** — для отображения уведомлений
- **isomorphic-dompurify** — для санитаризации HTML
- **husky** и **lint-staged** — для проверки кода перед коммитом (прекоммит-хуки)

Так как в задании не было ограничений по использованию сторонних библиотек (кроме требования использовать Next.js), я посчитал, что это не противоречит условиям задачи.

## Что можно улучшить

[ ] Добавить валидацию запроса при оформлении заказа на стороне BFF (Backend for Frontend)

[ ] Продолжить рефакторинг и декомпозицию сложных компонентов на UI, бизнес-логику и работу со стором

[ ] Добавить предзагрузку на стороне сервера первой страницы товаров

[ ] Исполльзовать Immer для иммутабельных обновлений состояния

[ ] Выделить слой backend

[ ] Добавить тесты

[ ] Добавить документацию
