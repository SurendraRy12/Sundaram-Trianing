import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ProductListComponent from './ProductListComponent'
import StoredData from './StoredData'
import EventHandling from './EventHandling'
import Events from './events'
function App() {
 

  return (
    <>
     {/* <ProductListComponent></ProductListComponent> */}
     <StoredData/>
     <EventHandling></EventHandling>
     <Events></Events>
     
    </> 
  )
}
export default App
