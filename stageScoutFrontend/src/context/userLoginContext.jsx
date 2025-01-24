import {createContext, useEffect, useState} from 'react'

const UserLoginContext = createContext();

function UserLoginProvider({children}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    async function userAuth(){
        const authToken  = localStorage.getItem("Authorization") || undefined
        
        if(authToken){
            const response  = await fetch("https://stage-scouts-backend.vercel.app/me", {
                "method":"GET",
                "headers":{
                    "authorization": authToken
                }
            })
    
            const output = await response.json();
    
            if(output.userId){
                setLoggedIn(true);
            }else{
                localStorage.removeItem("Authorization")
            }
        }else{
            setLoggedIn(false);
        }
        
    }

    useEffect(() => {
        userAuth()
    }, [])


    return (
        <UserLoginContext.Provider value={{username, password, setUsername, setPassword, loggedIn, setLoggedIn}}>
            {children}    
        </UserLoginContext.Provider>
    )
}

export {
    UserLoginContext,
    UserLoginProvider
};