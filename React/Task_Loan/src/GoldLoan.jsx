import React from 'react'
import { useContext } from 'react'
import { data } from './DataComp'

function GoldLoan() {

    let recData=useContext(data)
  return (

    <>
        <p>GoldLoan:{recData.goldloan.loantype}</p>
        <p>ROI{recData.goldloan.roi}</p>
        <p>Salaried:{recData.goldloan.salaried}</p>
        <p>Tenure:{recData.goldloan.tenure}</p>
        </>
  )
}

export default GoldLoan