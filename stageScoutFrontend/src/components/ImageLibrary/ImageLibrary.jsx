import Image from "./Image"
import {useEffect, useContext, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import StadiumDropDown from './stadiumDropDown'
import { imageLibraryContext } from '../../context/imageLibrarayContext'
import {UserLoginContext} from '../../context/userLoginContext'
import Alert from '../Alert'

function ImageLibrary(){
    const refrenceCounter = useRef(0)    
    const navigate = useNavigate();
    const {stadiumId, useCounter, setUseCounter} = useContext(imageLibraryContext);
    const {loggedIn} = useContext(UserLoginContext)
    const [urlList, setUrlList] = useState([]);
    
    async function fetchImageURL(){
        const reponse  = await fetch(`http://localhost:3000/api/image?stadiumId=${stadiumId}`, {
            'method': 'GET'
        })

        const output = await reponse.json();

        setUrlList(output)
    }
    
    useEffect(() => {
        // Only set useCounter and localStorage if it hasn't been initialized before
        const savedCount = localStorage.getItem('usageCount');
        if (!savedCount) {
            localStorage.setItem('usageCount', '0');
            setUseCounter(0);
        } else {
            setUseCounter(parseInt(savedCount));
        }

        refrenceCounter.current = parseInt(localStorage.getItem('usageCount')) || 0;
        
        setUseCounter(prevValue => prevValue + 1);
        refrenceCounter.current += 1;
        localStorage.setItem('usageCount', refrenceCounter.current);
        
        fetchImageURL();
    }, [stadiumId]);

    return(
    useCounter < 5 || loggedIn
    ?
        <div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}>
                <StadiumDropDown />
            </div>
            <div style={{display:'grid',gridTemplateColumns: 'repeat(3, 1fr)', gap:'16px', padding:'16px', justifyItems:'center'}}>
                {urlList.map((element, index) => (
                    <Image key={index} sourceURL={element.ImageName} standNumber={element.StandName} seatNumber={element.SeatNumber}/>
                ))}
            </div>
        </div>
    :
        <Alert redirectMessage='You have exhausted the free trial limit, Please Login/Register to continue using our free services.'/>
    )

}

export default ImageLibrary
