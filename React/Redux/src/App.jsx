import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './store'
import reduxstore from './store'
import AccountComponent from './AccountComponent'
import { Provider } from 'react-redux'


function App() {
  

  return (
    <>
    <Provider storeobj={reduxstore}>

      <AccountComponent/>
    </Provider>
      
    </>
  )
}

export default App
