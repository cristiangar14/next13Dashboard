import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState{
  [key: string]: SimplePokemon;
}

const getIitialState = (): PokemonsFavoriteState => {
  const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites
}

const initialState: PokemonsFavoriteState = {
  ...getIitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if ( !!state[id] ) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
  }
});

export const {
  toggleFavorite
} = pokemonsSlice.actions

export default pokemonsSlice.reducer