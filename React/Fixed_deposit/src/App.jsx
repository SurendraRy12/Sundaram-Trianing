import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FixedDeposit from './FixedDeposit'

function App() {
  

  return (
    
    
    <div className='comp'>
    <FixedDeposit depAmt={10000} intRate={2.5} tenure={2}/>
    
  
    </div>
  
  )
}

export default App
