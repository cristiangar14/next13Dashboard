import { Pokemon } from "@/pokemons";
import { Metadata } from 'next';

interface props {
  params: { id: string};
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pagina del pokemon ${name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
    cache: 'force-cache'
  })
  .then(res => res.json())

  return pokemon
}

export default async function PokemonPage({ params }: props) {
  const pokemon: Pokemon = await getPokemon(params.id);
  
  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}