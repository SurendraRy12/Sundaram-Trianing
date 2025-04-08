import React from 'react'
import {Link, Outlet, useParams} from 'react-router-dom'

function Orders() {


    //using path parameters
    let myorder=useParams();
    console.log(myorder);
    console.log(myorder.orderid)
    console.log(myorder.ordername)

    // let {orderid,ordername}=useParams();
    // console.log(orderid);
    // console.log(ordername);





  return (
    <>
        <p>Order page Component</p>
        <ul>
            <li><Link to="/order/pay">Payment</Link></li>
        </ul>
        <Outlet></Outlet>
    </>

    
  )
}

export default Orders