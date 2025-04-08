import React from 'react'
import { createContext } from 'react'
import GoldLoan from './GoldLoan'
import HousingLoan from './HousingLoan'
import VehicleLoan from './VehicleLoan'


export let data=createContext()
function DataComp() {
    let loaninfo={

        housingloan:
       {
       loantype:"Home Loan",
       roi:9.5,
       salaried:true,
       tenure:"20 years"
       },
        vehicleloan:
       {
       loantype:"Vehicle Loan",
       roi:11.5,
       salaried:true,
       tenure:"10 years"
       },
       
       
       goldloan:
       {
       loantype:"Gold Loan",
       roi:22.5,
       salaried:false,
       tenure:"1 year"
       }
       
       }
  return (
    <>
     <data.Provider value={loaninfo}>
            <GoldLoan></GoldLoan>
            <HousingLoan></HousingLoan>
            <VehicleLoan></VehicleLoan>
        </data.Provider>
    </>
  )
}

export default DataComp