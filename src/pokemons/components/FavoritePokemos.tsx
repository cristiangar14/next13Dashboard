'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemos = () => {
  const favoritePokemons = useAppSelector( state => Object.values(state.pokemons) );

  const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

  return (
    <>
      {
        pokemons.length 
        ? (<PokemonGrid pokemons={ pokemons } />)
        : (<NoFavorites />)
      }
    </>
  )
}

export const NoFavorites = () =>  {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100}  className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}

export default FavoritePokemos