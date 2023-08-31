import { createSlice } from "@reduxjs/toolkit";
import  {getDates}  from "../../firebase/firebaseFunctions";

let initialState = [];

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDates.fulfilled, (state, action) => {
      return action.payload
      })
     
  },
});

export default dateSlice.reducer;
