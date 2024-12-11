import { createSlice } from "@reduxjs/toolkit";


type habitsState={
  habits:string[]
}
const initialState:habitsState={
  habits:[]
}


const habitsSlice=createSlice({
  name:'habits',
  initialState,
  reducers:{
     addHapit:()=>{

     }
  }

})
export const {addHapit}=habitsSlice.actions
export default habitsSlice.reducer