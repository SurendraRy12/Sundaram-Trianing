import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Uicomponent() {
    const [data,setData]=useState();
    let myheading=useRef();
    let uname=useRef()
    let visits=useRef(1)
    let [something,setsomething]=useState(0)
   
    
  return (
    <>
        Enter data: <input ref={uname} type="text" />
        <button onClick={()=>{
            console.log("Button clicked")
            //current is a property used when using useRef
            console.log("Recived from text field:"+uname.current.value)
            visits.current=visits.current+1;
            setsomething(s=>s+1) //here this line has perform re-rendering so that useRef() replaces the old value with new value
            console.log("clicked"+visits.current)

        }}>Click</button>
        <p>Data Received:{data}</p> <br />
        <h1 ref={myheading} onClick={(e)=>{
            console.log(myheading);
            console.log("Recived value:"+myheading.current.innerHTML);
            myheading.current.innerHTML="let's code together"

        }}>Welcome click me</h1>

        <p>page visits : {visits.current}</p>
    </>

  )
}

export default Uicomponent

function click(){
    return(
        <p>Welcome</p>
    )
}