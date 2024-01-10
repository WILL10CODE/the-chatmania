import React, { useContext } from 'react';
import { FcGlobe } from "react-icons/fc";

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">
        Chatmania <FcGlobe className="world_icon" />
      </span>
      <div className='user'>
        <img src={currentUser.photoURL} alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar