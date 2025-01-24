import { useContext, useRef } from "react";
import { StadiumContext } from '../../context/stadiumContext'

function Error(props){
   return (
    <div>
        <label style={{color:'red', fontSize:'0.25rem'}}>{props.error}</label>
    </div>
   )

}

export default Error