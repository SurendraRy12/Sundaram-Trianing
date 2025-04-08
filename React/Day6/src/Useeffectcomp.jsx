import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Useeffectcomp() {
    let [data,setData]=useState(0);
    let [addcolor,setAddColor]=useState("blue")

    useEffect(()=>{
        document.title="Hello :"+data+"i am colored"+addcolor
    },[data,addcolor])


    function Increase(){
        setData(c=>c+1)
       
    }
    
    function Decrease(){
        setData(c=>c-1)
    }
    
    
    function SideByside(){
        setAddColor(clr=> clr?"red":"blue")
       
    }
    return(
        <>
        <p>Welcome</p>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={SideByside}>Side by side</button>
        <p style={{color:addcolor}}>{data}</p>
        
        </>

    )
}

export default Useeffectcomp

