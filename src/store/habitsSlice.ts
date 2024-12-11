import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Habit={
  id:string,
  name:string,
  frequency:"daily"|"weekly"
  completedDates:string[],
  createdAt:string,
}
type HabitsState={
  habits:Habit[]
}
const initialState: HabitsState={
  habits:[]
}


const habitsSlice=createSlice({
  name:'habits',
  initialState,
  reducers:{
     addHapit:
     (state,
      action:PayloadAction<{name:string;frequency:"daily"|"weekly"}>
    )=>{

      const newHabit:Habit={
        id:Date.now().toString(),
        name:action.payload.name,
        frequency:action.payload.frequency,
        completedDates:[],
        createdAt:new Date().toISOString(),
       }
      state.habits.push(newHabit)

     },
     removeHabit:()=>{

     },
     toggleHabit:()=>{

     }
     
     
  }

})
export const {addHapit,removeHabit}=habitsSlice.actions
export default habitsSlice.reducer