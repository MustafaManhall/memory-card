"use client";

import { fetchPokemons } from "@/lib/fetchCardImages";
import { Pokemon } from "@/types/card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [cardsList, setCardList]= useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const pokData = await fetchPokemons();
      setCardList(pokData);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Hi, this is Home.</h1>
      {cardsList.map((item: Pokemon) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <Image
              src={`${item.image}`}
              alt={"Pokemon Image"}
              width={250}
              height={250}
              loading="eager"
            />
          </div>
        );
      })}
    </div>
  );
}
