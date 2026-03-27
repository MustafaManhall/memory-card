# 🎮 Memory Card Game

A Pokemon-themed memory card game built with Next.js, TypeScript, and Tailwind CSS.

## 🔴 Live Preview

👉 [Play the game here](https://memory-card-five-pi.vercel.app/)

## ✨ Features

- Fetches 12 random Pokemon from the [PokeAPI](https://pokeapi.co/) on load
- Cards shuffle after every click to keep you on your toes
- Tracks your **Current Score** and **Best Score**
- Game Over when you click the same Pokemon twice
- Win screen when you click all 12 without repeating
- Fully responsive layout

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)

## 📁 Project Structure

```
memory-card/
├── app/
│   ├── page.tsx        # Main game logic & state
│   └── layout.tsx
├── components/
│   ├── Card.tsx        # Individual Pokemon card
│   └── ScoreBoard.tsx  # Score display
├── lib/
│   └── fetchCardImages.ts  # PokeAPI fetch logic
└── types/
    └── card.ts         # TypeScript interfaces
```

## 🚀 Getting Started

```bash
git clone https://github.com/MustafaManhall/memory-card.git
cd memory-card
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 What I Learned

- **TypeScript** — writing interfaces, typing props, state, and function return values
- **Next.js App Router** — project structure, layouts, pages, and client vs server components
- **Data Fetching** — hitting a real REST API (PokeAPI) and chaining multiple fetch calls with `Promise.all()`
- **React Hooks** — `useState` for managing game state, `useEffect` for fetching on mount
- **useEffect dependency array** — controlling when side effects run
- **JavaScript Set** — using `Set` for O(1) duplicate card detection
- **Immutability in React** — always creating new arrays/objects instead of mutating state
- **Tailwind CSS** — utility-first styling, grid layouts, hover effects, and responsive design
- **Vercel Deployment** — deploying a Next.js app in minutes

## 👤 Author

**Mustafa Manhal** — built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.