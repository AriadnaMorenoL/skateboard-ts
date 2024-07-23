# Skate Shoop

![App Img](./public/img/app-img.png)


# Overview
My App is a web application that started as a JavaScript project and was later migrated to TypeScript. Initially, the state management was handled using a custom hook, which was then refactored to use useReducer for better state management.

# Features

- Modern JavaScript and TypeScript: The project was initially developed in JavaScript and later transitioned to TypeScript for better type safety and developer experience.
- State Management: The state management started with a custom hook and was later refactored to use useReducer, providing a more robust and scalable state handling mechanism.
- Custom Hook: Originally used to manage the state in a modular and reusable way.
- useReducer: Refactored to useReducer for improved state management and maintainability.


# Project structure

my-app/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   │   └── useCart.ts // Initial custom hook (deprecated)
│   ├── reducers/
│   │   └── cart-Reducer.ts // New reducer implementation
│   ├── types/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md




