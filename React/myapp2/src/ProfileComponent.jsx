import Raect from 'react'
import Myimg from './p1.png'
// import './profile.css'
import PropTypes from 'prop-types'
function ProfileComponent(props){
    
        const yes=<div className="c1" style={{color:"blue"}}>
            <p>Profile </p>
            <img src={Myimg}></img>
            <p>Name:{props.name} Des:{props.des} Age:{props.age}</p>
        </div>

        const no=<p>Please provide details to get your profile displayed</p>
    
        return (
            <p>{props.loginStatus?yes:no}</p>)


           //Step -1 
        // if(props.loginStatus){
        //         return(
        //             <div className="c1" style={{color:"blue"}}>
        //     <p>Profile </p>
        //     <img src={Myimg}></img>
        //     <p>Name:{props.name} Des:{props.des} Age:{props.age}</p>
        //     </div>
        //         )
        // }
        // else{
        //     return(<p>Please provide details to get your profile displayed</p>)
        // }

    
}

export default ProfileComponent


ProfileComponent.PropTypes={
    name:PropTypes.string,
    des:PropTypes.string,
    age:PropTypes.number
}

ProfileComponent.defaultProps={
    name:"Anonymous",
    des:"still not assign",
    age:0
}