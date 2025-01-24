import {createContext, useState} from 'react';


const userContext = createContext();

function UserProvider({children}){
    const [firstName, setFirstName] = useState(); 
    const [lastName, setLastName] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [emailId, setemailId] = useState();
    const [password, setPassword] = useState();

    return(
        <userContext.Provider value={{firstName, setFirstName, lastName, setLastName, mobileNumber, setMobileNumber, emailId, setemailId, password, setPassword}}>
            {children}
        </userContext.Provider>
    )
}

export {
    UserProvider,
    userContext
};