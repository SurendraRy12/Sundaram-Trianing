import React ,{ useState } from "react"

function Events(){
    let [data,setData]=useState();
    // let c=0;
    let[count,setCount]=useState(0);
   
    let [dataa,setDataa]=useState();
    
    return(
        <>
        <input type="text" onChange={handleText}></input>
        <button onClick={handleClick}>click</button>
        <p>Recived data: {data}</p>
        <p>Data recived:{count}</p>

        <button onClick={handleBtn}>get information </button>
        <p>Recived data: {dataa}</p>
        </>
    )
    function handleText(e){
        setData(e.target.value)
        
    }
    
    function handleClick(e){
       
        setData(e.target.value)
        setCount(count+1);
        console.log(count)
    }
  

}

function handleBtn(e){
    setDataa(e.target.value)

}










export default Events