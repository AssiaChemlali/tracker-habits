import React from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { RootState } from '../store/store'
import { removeHabit, toggleHabit } from '../store/habitsSlice'

const HabitList = () => {

  const {habits}=useSelector((state:RootState)=>state.habits)
  const today=new Date().toISOString().split('T')[0]
  const dispatch=useDispatch()

  



  return (
    <div className=' mt-10'>
      <div className='grid grid-rows-3 mb-5'>
          {habits.map((habit)=>{
            return (
              <div className='shadow drop-shadow p-5 mb-5 border' key={habit.id}>
                <h4 className='text-2xl font-bold mb-2 capitalize'> {habit.name}</h4>

                <p className='capitalize text-base mb-3 text-slate-700'>{habit.frequency}</p>

                <div className='flex gap-3'>

                  <button 
                  className={`p-3 bg-white border  text-sm ${habit.completedDates.includes(today)? 'border-blue-500 text-blue-500':'border-green-500 text-green-500'}`} 
                  onClick={()=>dispatch(toggleHabit({id:habit.id,date:today}))}>
                    {habit.completedDates.includes(today)? 'Completed':'Mark Complete'}

                  
                  </button>

                  <button className="p-3 border text-sm border-red-500  text-red-500 capitalize" 
                  onClick={()=>dispatch(removeHabit({id:habit.id}))}
                  >remove </button>
                </div>
                     
              </div>
            )
          })}
      </div>
      
      
    </div>
  )
}

export default HabitList
