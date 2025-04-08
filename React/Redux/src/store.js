import React from 'react'
import {createStore} from 'redux'


    const accountStore={

        custname:"surendra",
        balanceamt:0,
        contactno:694874646
    
    }
    
    


function accountReducer(state=accountStore,action){

    if(action.type==="deposit"){
    
        return {...state,balanceamt:state.balanceamt+action.payload};
    }
    if(action.type==="withdraw"){
        return {...state,balanceamt:state.balanceamt-action.payload};
    }

    return state;

}

// storeobj.dispatch({type:"deposit",payload:1000});
// console.log(storeobj.getState())
// storeobj.dispatch({type:"withdraw",payload:500});
// console.log(storeobj.getState())

const store=createStore(accountReducer);
// export default Account
export default store

