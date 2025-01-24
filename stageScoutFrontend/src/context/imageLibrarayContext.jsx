import {createContext, useState} from 'react'

const imageLibraryContext = createContext();

function ImageLibrarayProvider({children}){
    const [stadiumId, setStadiumId] = useState(-1);
    const [useCounter, setUseCounter] = useState(0);
    return(
        <imageLibraryContext.Provider value={{stadiumId, setStadiumId, useCounter, setUseCounter}}>
            {children}
        </imageLibraryContext.Provider>
    )
}

export {
    imageLibraryContext,
    ImageLibrarayProvider
}