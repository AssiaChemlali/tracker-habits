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
     addHapit:(state,action:PayloadAction<{name:string;frequency:"daily"|"weekly"}>)=>{
        const newHabit:Habit={
          id:Date.now().toString(),
          name:action.payload.name,
          frequency:action.payload.frequency,
          completedDates:[],
          createdAt:new Date().toISOString(),
        }
        state.habits.push(newHabit)

     },

     removeHabit:(state,action:PayloadAction<{id:string}>)=>{
        state.habits = state.habits.filter((habit) => habit.id !== action.payload.id);
     },

     toggleHabit:(state, action:PayloadAction<{id:string;date:string}>)=>{

       const habit=state.habits.find((h)=>h.id===action.payload.id)
       if(habit){
        const index=habit.completedDates.indexOf(action.payload.date)

        if(index > -1){
          habit.completedDates.slice(index,1)
        } else{
          habit.completedDates.push(action.payload.date)
        }
       }
     }
     
     
  }

})
export const {addHapit,removeHabit,toggleHabit}=habitsSlice.actions
export default habitsSlice.reducer