import {Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";


export const localStorageMiddleware: Middleware = (store: MiddlewareAPI) => next => (action) => {
  next(action);

  const act = action as Action
  if( act.type === 'pokemons/toggleFavorite'){
    const { pokemons } = store.getState()
    localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));

  }

};