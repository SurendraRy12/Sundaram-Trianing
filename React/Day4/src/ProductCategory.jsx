import { useContext } from "react"
import { data } from "./StoredData"

function ProductCategory(){

    let recData=useContext(data)
    return(
        <p>{recData}</p>
    )

}

export default ProductCategory