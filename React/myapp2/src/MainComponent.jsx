import AppContext from "./AppContext"
import ChildComponent from "./ChildComponent"

function MainComponent(){
    const data="Im coming from Main component"
    return(
        // <h1>welcome</h1>
        <AppContext.Provider value={data}>
            <ChildComponent/>
        </AppContext.Provider>
    )
}

export default MainComponent