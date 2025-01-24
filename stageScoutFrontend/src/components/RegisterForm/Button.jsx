import { useContext } from "react";
import { userContext } from '../../context/userContext'

function Button(props){
    const {firstName, lastName, mobileNumber, emailId, password} = useContext(userContext);
   return (
    <div>
        <button onClick={submitHandler} style={{height:'50px', width:'150px', fontSize:'1.50rem', backgroundColor:'#2a80b9', color:'white', borderRadius:'5px', marginTop:'40px', border:'none'}}>{props.title}</button>
    </div>
   )

   async function submitHandler(event){
    try{
        event.preventDefault();

        if(!firstName || !lastName || !mobileNumber || !emailId || !password){
            alert("Fields cannot be left blank, Please re-check !")
            return
        }

        const response = await fetch("http://localhost:3000/api/auth/signup", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'firstName': firstName,
                'lastName': lastName,
                'mobileNumber': mobileNumber,
                'emailId': emailId,
                'password': password
            })
        })

       const output  = await response.json();
       alert(output.error)
    }catch(e){
        alert(e.message);
    }

   }
}

export default Button