import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sidebarstate:false
}


export const sidebarSlice = createSlice({

name:"sidebarstate",
initialState,
reducers:{
    setSidebarState : (state)=>{
state.sidebarstate=!state.sidebarstate
}

}})


export const {setSidebarState} = sidebarSlice.actions
export default sidebarSlice.reducer