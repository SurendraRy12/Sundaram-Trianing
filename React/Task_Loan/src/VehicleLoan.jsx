import React from 'react'
import { useContext } from 'react'
import { data } from './DataComp'

function VehicleLoan() {
    let recData=useContext(data)
  return (
    <>
    <p>{recData.vehicleloan.roi}</p>
    </>
  )
}

export default VehicleLoan