import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        featureVideoKey: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addFeatureVideoKey: (state,action)=>{
            state.featureVideoKey = action.payload
        }
    }
})
export const {addNowPlayingMovies,addFeatureVideoKey} = movieSlice.actions;
export default movieSlice.reducer;