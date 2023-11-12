import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProviders'


function  Login() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
               // console.log(result)
             dispatch({ 
                type: actionTypes.SET_USER,
                user: result.user,
             })
            })
            .catch(error=> alert(error.message))

    };
  return (
     <div className='login'>
          <div className='login_logo'>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="" 
             />
              <img src="http://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" 
              />
          </div>
     
              <Button type='submit' onClick={signIn}>Login</Button>
      </div>
    
  )
}

export default Login