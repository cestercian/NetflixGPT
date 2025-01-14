import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptPageToggle: false,
    MoviesRecommendation: null,
    searchState:1,
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.gptPageToggle = !state.gptPageToggle;
    },
    addMoviesRecommendation: (state, action) => {
      state.MoviesRecommendation = action.payload
    },
    changeSearchState:(state,action)=>{
      state.searchState = action.payload;
    }
  }
});

export const { toggleGpt,addMoviesRecommendation,changeSearchState } = gptSlice.actions;
export default gptSlice.reducer;
