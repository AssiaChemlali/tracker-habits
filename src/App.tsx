import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from "./store/store.ts"
import HabitForm from './comonents/HabitForm.tsx'
import HabitList from './comonents/HabitList.tsx'

const App:React.FC=()=> {


  return (
   <Provider  store={store}>
      <div className='container font-serif p-10'>
        <h2 className='text-xl font-bold mb-4'>Habits Tracker</h2>
           <HabitForm/>
           <HabitList/>

      </div>
   </Provider>
      
 
  )
}

export default App
