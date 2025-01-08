import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        featureVideoKey: null,
        popularMovies:null,
        topRated: null,
        upcoming: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addFeatureVideoKey: (state,action)=>{
            state.featureVideoKey = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcoming = action.payload
        },
    }
})
export const {addNowPlayingMovies,addFeatureVideoKey,addPopularMovies,addUpcomingMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;