import React, { useState } from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { addHapit } from '../store/habitsSlice'

const HabitForm = () => {
  const [name,setName]=useState<string>('')
  const [frequency,setFrequency]=useState<"daily"|"weekly">("daily")

const dispatch=useDispatch<AppDispatch>()
  function handleAddHait(e:React.FormEvent){
    e.preventDefault()
   if(name.trim()){
      dispatch(addHapit({name,frequency}))
      setName('')
   }


    
  }

  return (
    <form className='flex flex-col ' onClick={handleAddHait}>
      <label htmlFor="">Habit Name</label>
      <input 
      className='border p-3 mb-4'
      type="text"
       value={name}
       placeholder='Enter habit name'
       onChange={(e)=>setName(e.target.value)}
      />

      <label htmlFor="">Select Frequency</label>
      <select id="" name="frequency" className='border p-2'
      onChange={(e)=>setFrequency(e.target.value as "daily" |"weekly")}>
          <option value="daily"> Daily</option>
          <option value="weekly"> Weekly</option>
      </select>
      

      <button type='submit' className='bg-blue-500 text-white p-4 mt-5 font-bold capitalize'>add habit </button>
  

    </form>
  )
}

export default HabitForm
