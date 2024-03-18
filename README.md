
# Sports Good Ignat Application

Це застосунок для компанії, яка продає спортивний інвентарь та одяг для бодібилдеров і людей, які підтримують свою фізичну формку. Застосунок багатосторінковий, на даний момент реалізована тільки сторінка "Новинки".

## Технічні деталі

- Реалізовано за допомогою React.
- Використано pre-proccessor SCSS  для оформлення.
- Роутинг реалізовано за допомогою React Router.
- Використано Splide.js для реалізації слайдеров карток і зображень.

## Структура проєкту
```
test-Ignat-React/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── fonts.scss
│   │   ├── images/
│   │   │   └── hero.jpg
│   │   └── sprite.svg
│   │
│   ├── data/
│   │   ├── products.json
│   │   ├── feedback.json
│   │   └── links.json
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.scss
│   │   │
│   │   ├── reUseComponents/
│   │   │   ├── Navigation.jsx
│   │   │   └── ProductCard.scss
│   │   │
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.scss
│   │   │
│   │   ├── FeedbackCard/
│   │   │   ├── FeedbackCard.jsx
│   │   │   └── FeedbackCard.scss
│   │   │
│   │   ├── Slider/
│   │   │   ├── SliderFeedBack.jsx
│   │   │   ├── SliderHero.jsx
│   │   │   └── SliderProducts.jsx
│   │   │
│   │   ├── Layout.jsx
│   │   │
│   │   ├── NotFound.jsx
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.scss
│   │
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.scss
│   │
│   ├── App.js
│   ├── main.jsx
│   └── index.scss
│
├── README.md
└── ...
```


## Запуск проєкту

1. Склонуйте репозиторій:

```bash
git clone https://github.com/malaya1855/test-Ignat-React.git
```
2. Встановіть необхідні пакети:

```bash
npm install
```
3. Запустіть проєкт:
```bash
npm run dev
```
4. Відкрийте в браузері http://localhost:3000.

## Макет застосунку
Сторінка "Новинки" реалізована згідно макету [Figma](<https://www.figma.com/file/pWcOlcMkTvSu08Ov7DKhhP/Interne-technical-task?type=design&node-id=0%3A1&mode=design&t=Zyn6z6FQ1l0XDDlY-1>)

## Контакти розробника
Катерина Мала  - malaya1855@gmail.com - [GitHubPages](<https://github.com/malaya1855>)
