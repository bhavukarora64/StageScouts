import { Link } from "react-router-dom";
import StageScouts_Logo from '../assets/StageScouts_Logo.png'
import uploadIcon from '../assets/upload-icon.png'
import signIn from '../assets/signin-icon.png'
import about from '../assets/about-icon.png'
import {useContext} from "react";
import {UserLoginContext} from '../context/userLoginContext' 
function Navbar(){

    const {loggedIn, setLoggedIn} = useContext(UserLoginContext);
    return (
        <nav style={{backgroundColor:'white', borderBottom:'1px solid', display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex' }}>
            <Link to="/"style={{ textDecoration:'none'}}>
                    <div style={{display:'flex'}}>
                        <img src={about} style={{height:'20px', paddingTop:'9px', marginRight:'6px'}}></img>
                        <span style={{ color:'black', marginRight:'10px', marginTop:'10px'}}>About</span>
                    </div>
                </Link>
            </div>
            <div>
            <Link to="/"><img 
                    src={StageScouts_Logo}
                    style={{height:'40px'}}
                ></img>
            </Link>
            </div>
            <div style={{display:'flex'}}>
                <Link to="/imageupload"style={{ textDecoration:'none'}}>
                    <div style={{display:'flex'}}>
                        <img src={uploadIcon} style={{height:'30px', paddingTop:'5px'}}></img>
                        <span style={{ color:'black', marginRight:'10px', marginTop:'10px'}}>Upload</span>
                    </div>
                </Link>
        {loggedIn ? 
                <Link to="/" onClick={logout} style={{ textDecoration:'none'}}>
                    <div style={{display:'flex'}}>
                        <img src={signIn} style={{height:'20px', paddingTop:'10px', marginRight:'6px'}}></img>
                        <span style={{ color:'black', marginRight:'10px', marginTop:'10px'}}>Logout</span>
                    </div>
                </Link>
                    :
                <Link to="/signin"style={{ textDecoration:'none'}}>
                    <div style={{display:'flex'}}>
                        <img src={signIn} style={{height:'20px', paddingTop:'10px', marginRight:'6px'}}></img>
                        <span style={{ color:'black', marginRight:'10px', marginTop:'10px'}}>Signin</span>
                    </div>
                </Link>
        }
                <Link to='/register'><button style={{backgroundColor:'#2a80b9', color:'white', marginBottom:'10px', borderRadius:'5px', border:'none', padding:'10px'}}>Create Account</button></Link>
            </div>
        </nav>
    )

    function logout(){
        localStorage.removeItem("Authorization");
        setLoggedIn(false);
    }
}

export default Navbar;