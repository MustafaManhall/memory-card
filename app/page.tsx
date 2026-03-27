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
      setScore(0);
      console.log("game over");
    } else {
      setClickedCards(new Set([...clickedCards, id]));
      const newArr = [...cardsList].sort(() => Math.random() - 0.5);
      setCardList(newArr);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= bestScore) {
        setBestScore(newScore);
      }
    }
  }
  return (
    <div className="flex justify-center items-center h-auto">
      <h1>Hi, this is Home.</h1>
      <Score bestScore={bestScore} currentScore={score} />
      <Card cardData={cardsList} handleClick={handleCardClick} />
    </div>
  );
}
