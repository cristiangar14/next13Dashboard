'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5";
// import { SimplePokemon } from "../interfaces/simple-pokemon";
// import { useEffect, useState } from "react";

export const FavoritePokemos = () => {
  const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites) );

  // const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons)
   
  // }, [favoritePokemons]);

  return (
    <>
      {
        favoritePokemons.length 
        ? (<PokemonGrid pokemons={ favoritePokemons } />)
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