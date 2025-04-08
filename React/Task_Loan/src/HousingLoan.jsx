import React from 'react'
import { useContext } from 'react'
import { data } from './DataComp'


function HousingLoan() {
    let recData=useContext(data)
  return (
    <>
    <p>{recData.housingloan.loantype}</p>
    </>
  )
}

export default HousingLoan