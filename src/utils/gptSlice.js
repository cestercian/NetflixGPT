import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptPageToggle: false,
    MoviesRecommendation: [],
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.gptPageToggle = !state.gptPageToggle;
    },
    addMoviesRecommendation: (state, action) => {
      state.MoviesRecommendation = action.payload
    }
  }
});

export const { toggleGpt,addMoviesRecommendation } = gptSlice.actions;
export default gptSlice.reducer;
