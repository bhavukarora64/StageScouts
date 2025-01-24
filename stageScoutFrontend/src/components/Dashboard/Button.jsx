import { useContext } from "react";
import { Link } from "react-router-dom";

function Button(props){
   return (
    <div>
        <Link to={props.redirectEndpoint} ><button style={{height:'60px', width:'270px', fontSize:'1.50rem', backgroundColor:'#2a80b9', color:'white', borderRadius:'5px', marginTop:'40px', border:'none'}}>{props.title}</button></Link>
    </div>
   )

}

export default Button