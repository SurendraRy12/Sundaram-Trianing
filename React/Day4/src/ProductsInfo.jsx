import { useContext } from "react"
import { data } from "./StoredData"

function ProductInfo(){

    let receiveData=useContext(data)
    return(
        <p>{receiveData}</p>
    )

}

export default ProductInfo