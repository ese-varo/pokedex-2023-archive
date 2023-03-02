import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  page: 1,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.results = action.payload.results;
      if (state.page === 8) {
        state.results = action.payload.results.splice(0, 11);
      }
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { updateList, incrementPage, decrementPage } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
