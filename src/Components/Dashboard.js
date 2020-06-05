import React,{useContext,useEffect} from 'react';
import { Auth } from 'aws-amplify';
import { AuthContext } from '../Context/AuthContext';
import {Redirect} from 'react-router-dom'

const Dashboard = () => {
    const {Auths,setAuths} = useContext(AuthContext)
    // useEffect(()=>{
    //     const fun = async() => {
    //         try{
    //         const session = await Auth.currentSession()
    //         console.log(session)
    //         setAuths(true)
    //     }catch(err){
    //         console.log(err);
    //         setAuths(false)
    //     }
    //     }
    //     fun()
    // },[])

    const handleLogout = (event) => {
        event.preventDefault()
        try{
            Auth.signOut()
            setAuths(false)
        }catch(error){
            console.log(error)
        }
    }

    if(Auths){
        return ( 
            <div>
                Welcome to Dashboard
                <form onSubmit={handleLogout}>
                <button type="submit">Logout</button>
                </form>
            </div>
         );
    }else{
        return(
        <div>
        <Redirect to="/login"/>
        </div>
        )
    }
}
 
export default Dashboard;