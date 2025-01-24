import { useState } from 'react';
import {createContext} from 'react';


const StadiumContext = createContext();

function StadiumProvider({children}){
    const [stadiumName, setStadiumName] = useState('');
    const [imageName, setImageName] = useState('');
    const [stadiumStand, setStadiumStand] = useState('');
    const [stadiumSeats, setStadiumSeats] = useState('');
    const [ImagePublished, setImagePublished] = useState(false);
    const [imageUploaded, setImageUploaded] = useState(false);

    return (
        <StadiumContext.Provider value={{stadiumName, setStadiumName, imageName, setImageName, stadiumStand, setStadiumStand, stadiumSeats, setStadiumSeats, ImagePublished, setImagePublished,imageUploaded , setImageUploaded}}>
            {children}
        </StadiumContext.Provider>
    )
}

export {
    StadiumProvider, 
    StadiumContext
};