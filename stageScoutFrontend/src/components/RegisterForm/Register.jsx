import { useContext, useRef } from "react";
import {userContext} from '../../context/userContext'
import Button from './Button';
import Input from './Input'
import Error from './Error'
import { Link } from "react-router-dom";

function Register(){
    const {firstName, lastName, mobileNumber, emailId, password, setFirstName, setLastName, setMobileNumber, setemailId, setPassword } = useContext(userContext);      
   return (
    <div style={{display:'flex', justifyContent:'center', paddingTop:'100px'}}>
        <form style={{border:'2px solid #2a80b9', height:'650px', width:'500px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{fontSize:'2.50rem'}}>Register</h1>
            <Input value={firstName} type='text' placeholder='Enter your First Name' title='First Name' handleChange={updateFirstName}/>
            <Input value={lastName} type='text' placeholder='Enter your Last Name' title='Last Name' handleChange={updateLastName}/>
            <Input value={mobileNumber} type='text' placeholder='Enter your Mobile Number' title='Mobile Number' handleChange={updateMobileNumber}/>
            <Input value={emailId} type='text' placeholder='Enter your Email id' title='Email Id' handleChange={updateEmailId}/>
            <Input value={password} type='password' placeholder='Enter your Password' title='Password' handleChange={updatePassword}/>
            <Error />
            <Button title='Register'/>
            <span style={{marginTop:'10px', marginBottom:'3px'}}>Or</span>
            <Link to='/signin' style={{textDecoration:'none', fontSize:'1.25rem', color:'black'}}>Already registered ?</Link>
        </form>
    </div>
   )

   function updateFirstName(e){
    setFirstName(e.target.value)  
  }

  function updateLastName(e){
    setLastName(e.target.value)
  }

  function updateMobileNumber(e){
    setMobileNumber(e.target.value)
  }

  function updateEmailId(e){
    setemailId(e.target.value)
  }

  function updatePassword(e){
    setPassword(e.target.value)
  }
}

export default Register