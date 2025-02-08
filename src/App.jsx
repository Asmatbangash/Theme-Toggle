import React, { useContext } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'
import ContextApi from './Store/ContextApi'

function App() {
  return (
   <ContextApi >
   <div className='flex flex-col justify-center items-center my-5 py-5'>
   <Button />
   <Card />
   </div>
   </ContextApi>
  )
}

export default App
