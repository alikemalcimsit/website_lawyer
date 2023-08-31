import { createSlice } from "@reduxjs/toolkit";


let initialState={}

export const timeSlice = createSlice({

name:"time",
initialState,
reducers:{
    setTime(state, action) {
     
        state.time = action.payload;

      },
}

})

export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
