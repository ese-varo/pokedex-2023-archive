import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  page: 0,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    update: (state, action) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
    },
  },
});

export const { update } = pokemonSlice.actions;
export default pokemonSlice.reducer;
