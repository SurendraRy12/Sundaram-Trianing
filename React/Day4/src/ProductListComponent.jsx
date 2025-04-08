import React from 'react'

function ProductListComponent(){
    const productlist={
        toy:{
            tid:101,category:"toys",agegroup:3
        },
        watch:{
            wid:101,category:"Fashion",agegroup:18
        }
}
    return(
    <div>
        <DisplayProducts {...productlist}/>
    </div>
        
    )
}

export default ProductListComponent
function DisplayProducts(props){
    return(
        <>
        <p>toyid:{props.toy.tid} toy Category:{props.toy.category} age group : {props.toy.agegroup}</p>
        <p>watchid:{props.watch.wid} watch Category:{props.watch.category} age group : {props.watch.agegroup}</p>
        </>
    )
}