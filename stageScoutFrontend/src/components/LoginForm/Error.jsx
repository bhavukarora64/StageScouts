import { useContext, useRef } from "react";
import { StadiumContext } from '../../context/stadiumContext'

function Error(props){
   return (
    <div>
        <label style={{color:'red', fontSize:'1.00rem'}}>{props.error}</label>
    </div>
   )

}

export default Error