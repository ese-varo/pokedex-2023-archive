import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  page: 1,
  archived: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    updateList: (state, action) => {
      const pokemonsWithoutArchived = action.payload.results.filter(
        (pokemon) => !state.archived.includes(pokemon.name)
      );
      state.items = pokemonsWithoutArchived;
      if (state.page === 8) {
        state.items = pokemonsWithoutArchived.splice(0, 11);
      }
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    archive: (state, action) => {
      const pokemonsWithoutArchived = state.items.filter(
        (pokemon) => pokemon.name !== action.payload
      );
      state.items = pokemonsWithoutArchived;
      state.archived.push(action.payload);
    },
  },
});

export const { updateList, incrementPage, decrementPage, archive } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
