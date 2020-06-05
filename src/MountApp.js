import React, { useEffect,useContext } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import { Auth } from 'aws-amplify';
import { AuthContext } from './Context/AuthContext';

const MountApp = () => {
    const {Auths,setAuths} = useContext(AuthContext)

    useEffect(()=>{
        const fun = async() => {
            try{
            const session = await Auth.currentSession()
            console.log(session)
            setAuths(true)
        }catch(err){
            console.log(err);
            setAuths(false)
        }
        }
        fun()
    },[])

    console.log("Molunt")
    return ( 
        <div>
            <BrowserRouter>
             <Switch>
                 <Route path="/dashboard" component={Dashboard}/>
                 <Route path="/login" component={Login}/>
             </Switch>
         </BrowserRouter>
        </div>
     );
}
 
export default MountApp;