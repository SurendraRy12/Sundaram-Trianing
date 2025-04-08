import React from 'react'

import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Registration from './Registartion'
import Uicomponent from './Uicomponent'
import Home from './Home'
import Orders from './Orders'
import Cart from './Cart'
import HomeCom from './Navbar'
import Payment from './Payment'

function RouteComponent() {
  return (
    <>
    
    <BrowserRouter>
    <HomeCom/>
    <Routes>
    
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/reg" element={<Registration/>}></Route>
        <Route path="/order/:orderid/:ordername" element={<Orders/>}>

            <Route path="pay" element={<Payment/>}></Route>
        </Route> 
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default RouteComponent



