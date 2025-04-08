import React from 'react'
import ComponentC from './ComponentC'
function ComponentB(props) {
    return(
        <div style={{border:2,borderStyle:"solid",backgroundColor:"tomato"}}>
            <ComponentC datab={props.data} />
                
        </div>

    )
    
}

export default ComponentB