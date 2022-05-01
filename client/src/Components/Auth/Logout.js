import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebaseConfig'
import {FiLogOut} from 'react-icons/fi'

function Logout(props) {
    return (
        <button  {...props} onClick={() => {
            signOut(auth);
        }}>logout  </button>
    )
}

export default Logout