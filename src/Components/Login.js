import React, { useState,useContext,useEffect } from 'react';
import {Auth} from 'aws-amplify'
import { AuthContext } from '../Context/AuthContext';
import {Redirect} from 'react-router-dom'
const Login = () => {
      const {Auths,setAuths} = useContext(AuthContext)

      // useEffect(()=>{
      //       const fun = async() => {
      //           try{
      //           const session = await Auth.currentSession()
      //           console.log(session)
      //           setAuths(true)
      //       }catch(err){
      //           console.log(err);
      //           setAuths(false)
      //       }
      //       }
      //       fun()
      //   },[])
    
      const onSubmit = async(event) => {
            event.preventDefault()
            try{
                  Auth.configure({
                     "storage":localStorage   
                  });
                  const user = await Auth.signIn(event.target.username.value,event.target.password.value)
                  // localStorage.setItem('storage',JSON.stringify(user));
                  console.log(user)
                  // setAuths(true)
                  setAuths(true)
            }catch(error){
                  console.log(error)
            }
      }

      if(!Auths){
            return ( 
                  <div>
                      <form onSubmit={onSubmit}>
                         <input type="text" placeholder="Username" name="username"/>
                         <input type="password" placeholder="Password" name="password"/>
                         <button type="submit">Login</button>
                      </form>
                  </div>
               );
      }else{
            return(
            <div>
            <Redirect to="/dashboard"/>
            </div>
            )
      }
}
 
export default Login;