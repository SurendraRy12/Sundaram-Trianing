import AppContext from "./AppContext"

function SiblingComponent(){
    return(
        <AppContext.Consumer>
            {
                (data)=>{
                    <p>Data{data}</p>

                }
            }
        </AppContext.Consumer>
    )
}

export default SiblingComponent