"use client";

import Card from "@/components/Card";
import Score from "@/components/ScoreBoard";
import { fetchPokemons } from "@/lib/fetchCardImages";
import { Pokemon } from "@/types/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [cardsList, setCardList] = useState<Pokemon[]>([]);
  const [clickedCards, setClickedCards] = useState<Set<number>>(new Set());
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [status, setStatus] = useState<{ won: boolean; gameOver: boolean }>({
    won: false,
    gameOver: false,
  });

  useEffect(() => {
    async function fetchData() {
      const pokData = await fetchPokemons();
      setCardList(pokData);
    }
    fetchData();
  }, []);

  function handleCardClick(id: number) {
    const findCard = clickedCards.has(id);
    if (findCard) {
      setClickedCards(new Set());
      setStatus({ won: false, gameOver: true });
      setScore(0);
    } else {
      setClickedCards(new Set([...clickedCards, id]));

      const newArr = [...cardsList].sort(() => Math.random() - 0.5);
      setCardList(newArr);

      const newScore = score + 1;
      setScore(newScore);

      setStatus({ won: false, gameOver: false });

      if (newScore >= bestScore) {
        setBestScore(newScore);
      }

      if (newScore === 12) {
        setStatus({ won: true, gameOver: false });
        setClickedCards(new Set());
        setScore(0);
      }
    }
  }
  return (
    <div className="flex flex-col justify-center items-center h-auto">
      <h1>Hi, this is Home.</h1>
      {status.won && <h1 className="text-4xl text-green-500">You Won...</h1>}
      {status.gameOver && (
        <h1 className="text-4xl text-fuchsia-500">Game Over...</h1>
      )}
      <Score bestScore={bestScore} currentScore={score} />
      <Card cardData={cardsList} handleClick={handleCardClick} />
    </div>
  );
}
