import { useContext } from "react";
import { UserLoginContext } from '../../context/userLoginContext'
import { useNavigate } from "react-router-dom";

function Button(props){
    try{
        const navigate = useNavigate();
        const {username, password,setUsername,setPassword,setLoggedIn} = useContext(UserLoginContext);
       return (
        <div>
            <button onClick={submitHandler} style={{height:'50px', width:'150px', fontSize:'1.50rem', backgroundColor:'#2a80b9', color:'white', borderRadius:'5px', marginTop:'40px'}}>{props.title}</button>
        </div>
       )
    
       async function submitHandler(event){
            event.preventDefault();
            const response = await fetch("https://stage-scouts-backend.vercel.app/api/auth/login", {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'username': username,
                    'password': password
                }
            })
    
           const output  = await response.json();
           
           if(output.Authorization){
                const authToken = output.Authorization
                localStorage.setItem("Authorization", authToken)
    
                if(localStorage.getItem("Authorization"))
                    {   
                        setUsername("");
                        setPassword("");
                        navigate("/")
                        alert("You Have sucessfully Logged in !")
                        setLoggedIn(true);
                    } 
            }else if(output.error){
                alert(`Failed to Login: ${output.error}`)
            }else{
                alert("Failed to Login, Please try again after some time !")
            }
       }
    }catch(e){
        return alert(e.message)
    }

}

export default Button