import React from 'react'
import ComponentB from './ComponentB'
function ComponentA(){
    return(
        <div style={{border:2,borderStyle:"solid",backgroundColor:"lightgray"}}>
            <ComponentB data="Data passed from parent ComponentA"/>
        </div>
    )
}

export default ComponentA