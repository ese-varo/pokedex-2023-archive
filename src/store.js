import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./features/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
