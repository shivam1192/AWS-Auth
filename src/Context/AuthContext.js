import React,{createContext,useState,useEffect} from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [Auths,setauths] = useState(false)
   
    const setAuths= (data) =>{
        console.log("auth::", data);
        
        setauths(data)
    }
    console.log(Auths)
    return ( 
        <AuthContext.Provider value={{Auths,setAuths:setAuths}}>
           {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
