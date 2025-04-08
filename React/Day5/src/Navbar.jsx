import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function HomeCom() {
  return (
    <>
        
        <ul>
            <li><Link className='lin' to={"/home"}>Home</Link></li>
            <li><Link to={"/reg"} className='lin' >Registartion</Link></li>
            <li><Link to={"/order/100/phone"} className='lin' >Orders</Link></li>
            <li><Link to={"/cart"} className='lin' >Cart</Link></li>
        </ul>
        <p>

        </p>
    </>
  )
}

export default HomeCom