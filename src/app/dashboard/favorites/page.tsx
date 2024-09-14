import { FavoritePokemos } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Pagina de favoritos'
};



export default async function  FavoritePage() {


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemosn favoritos <small className="text-blue-500">Global state</small></span>
      <FavoritePokemos />
    </div>
  );
}
