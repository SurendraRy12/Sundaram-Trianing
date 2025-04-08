function EventHandling(){
    let executeClick=()=>console.log("i am arrow function handler")
    return(
        <>
        <button onClick={handleClick}>Click</button>

        {/* here we are directly creating a arrow handler */}
        <button onClick={executeClick}>click meee</button>
        <button onClick={()=>console.log("just you clicked me")}>Click me</button>
        </>
    )
}

export default EventHandling


function handleClick(e){
    console.log(e)
    console.log(e.target)
    console.log("U Just clicked me that's why i am coming here..")
    return(
        <>


        </>
    )
}