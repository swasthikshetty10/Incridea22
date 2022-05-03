import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebaseConfig'

function Logout(props) {
    return (
        <button  {...props} onClick={() => {
            signOut(auth);
        }}>LOGOUT  </button>
    )
}

export default Logout