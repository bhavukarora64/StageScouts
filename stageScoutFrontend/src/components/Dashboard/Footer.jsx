import { Link } from "react-router-dom"
import StageScouts_Logo from '../../assets/StageScouts_Logo.png'

function Footer(){
    return(
            <div style={{display:'flex', marginTop:'200px', gap:'300px', justifyContent:'space-around', width:'1600px',backgroundColor:'whitesmoke' }}>
                <div style={{paddingTop:'40px', flexGrow:'3', paddingLeft:'200px'}}>
                    <Link to="/">
                        <img 
                            src={StageScouts_Logo}
                            style={{height:'40px'}}
                        />
                    </Link>
                </div>
                <div style={{paddingTop:'20px', flexGrow:'0.2', textAlign:'right', paddingRight:'200px'}}>
                    <div style={{display:'flex', gap:'10px', justifyContent:'end'}}>
                        <Link style={{textDecoration:'none', color:'black'}}><p>Terms of Use</p></Link>
                        <Link style={{textDecoration:'none', color:'black'}}><p>Privacy Policy</p></Link>
                        <Link style={{textDecoration:'none', color:'black'}}><p>Contact</p></Link>
                    </div>
                    <p>Copyright 2025 StageScouts. All rights reserved</p>

                </div>
            </div>
    )
}

export default Footer