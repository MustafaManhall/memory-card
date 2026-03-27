import { Pokemon } from "@/types/card";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const pokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  const pokemonJson = await pokemonList.json();
  const pokemonData = Promise.all(
    pokemonJson.results.map(async (item: { name: string; url: string }) => {
        const pok = await fetch(item.url);
        const pokJs = await pok.json();
        return {
            id: pokJs.id,
            name: item.name,
            image: pokJs.sprites.other["official-artwork"].front_default
        }
    }),
  );
  return pokemonData;
}
