import Input from './Input'
import Button from './Button'
import Error from './Error'
import { UserLoginContext } from '../../context/userLoginContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Login(){
    const {username, password, setUsername, setPassword} = useContext(UserLoginContext);
    return(
        <div style={{display:'flex', justifyContent:'center', marginTop:'200px'}}>
            <form style={{border:'2px solid #2a80b9', width:'500px', height:'450px', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center', paddingTop:'10px'}}>
                <h1>LOGIN</h1>
                <Input type='text' title='Username' handleChange={updateUsername} value={username}/>
                {/* <Error error='Invalid Value'/> */}
                <Input type='password' title='Password' handleChange={updatePassword} value={password}/>
                {/* <Error error='Invalid Value'/> */}
                <Button title='Signin'/>
                <span>Or</span>
                <Link to='/register' style={{textDecoration:'none', fontSize:'1.25rem', color:'black'}}>Register</Link>
            </form>
        </div>
    )

    function updateUsername(e){
        setUsername(e.target.value);
    }

    function updatePassword(e){
        setPassword(e.target.value);
    }
}

export default Login