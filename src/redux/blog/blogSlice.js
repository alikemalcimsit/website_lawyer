import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, getBlogsById, getBlogsbyDate } from "../../firebase/firebaseFunctions";

// İlk başta boş state'ler oluşturuyoruz
const initialStateForBlogs = [];

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialStateForBlogs, // blogs için state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, action) => {
        return action.payload; // getBlogs fonksiyonundan gelen verileri blogs state'ine atıyoruz
      })
   
  },
});



export default blogsSlice.reducer;
