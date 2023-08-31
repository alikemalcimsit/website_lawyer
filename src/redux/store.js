import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar/sidebarSlice";
import  blogSlice  from "./blog/blogSlice";
import dateSlice from "./dates/dateSlice";
import  blogByIdSlice  from "./blog/getBlogbyId";
import timeSlice from "./time/timeSlice";


const middleware = getDefaultMiddleware({
    serializableCheck: false, // Bu satır hatayı görmezden gelmenizi sağlar.
    // Diğer middleware'ler burada yer alabilir
  });
  

export const store = configureStore({
    middleware,
    reducer:{
        sidebarstate:sidebarSlice,
        blogs:blogSlice,
        date:dateSlice,
        blogById: blogByIdSlice, 
        time:timeSlice,
    }
})