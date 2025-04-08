import React,{useContext} from "react";
import { createContext } from "react";
import ProductCategory from "./ProductCategory";
import ProductInfo from "./ProductsInfo";


export let data=createContext();
function StoredData(){
    let products="This is the products information"
    return(
        
        <>
        <data.Provider value={products}>
            <ProductCategory></ProductCategory>
            <ProductInfo></ProductInfo>
        </data.Provider>
        </>
    )
}

export default StoredData

