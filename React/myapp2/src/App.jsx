import React, { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileComponent from './ProfileComponent'
import ComponentA from './ComponentA'
import MainComponent from './MainComponent'
function App() {
  

  return (
    // <div>
    //   <div>Welcome to All</div>
    //   <div>Welcome to All</div>
    //   <p>Welcome to react </p>
    // </div>
    
    // {/* <DisplayData></DisplayData> */}
    // {/* <ProfileComponent name="Surendra" des="software engineer" age={22} loginStatus={false}/> */}
    // {/* <ProfileComponent name="Vivek" des="software engineer" age={21}/> */}
    // {/* <ProfileComponent/> */}
    // {/* <ComponentA/> */}
    <React.Fragment>
    <MainComponent/>

    </React.Fragment>
    
  )
}

export default App

function DisplayData(){
  return(
    <>
      <div>Welcome to All</div>
      <div>Welcome to All</div>
      </>
  )
}
