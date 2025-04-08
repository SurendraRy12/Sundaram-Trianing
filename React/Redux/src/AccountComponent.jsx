import React from 'react'
import {useSelector,useDispatch} from 'react-redux'



function AccountComponent() {
const balanceamt=useSelector((somestate)=>somestate.balance);
const dispatcher=useDispatch();
  

    function handleDeposit(){
        dispatcher({type:"deposit",payload:1000})
        console.log(balanceamt);
    }

    function handleWithdraw(){
        dispatcher({type:"withdraw",payload:500})
        console.log(balanceamt);
    }

    return(
        <>
        <button onClick={handleDeposit}> Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        </>
    )

}

export default AccountComponent