import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptPageToggle: false,
    },
    reducers:{
        toggleGpt: (state,action)=>{
            state.gptPageToggle = !state.gptPageToggle;
        }
    }
})

export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;