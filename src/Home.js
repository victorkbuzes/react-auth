import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider'
import { auth, db } from './firebase/firebase-config';
import { signOut } from "firebase/auth";


export default function Home() {
  const { currentUser} = useContext(AuthContext);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUserName(data.firstName + " " + data.lastName);

          
        }
      });
      
    }
  }, [currentUser]);
  
  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
      
    }else {
      navigate("/login");
    }
  };
  const clickSignUp = () => {
    navigate("/signup");
  };


  return (
    <div>
      <h1>Hello</h1>
      {currentUser && <p> Welcome , {userName}</p>}
      <div>
        <button onClick={clickLogin}>
          {currentUser ? "Logout" : "Login" }
        </button>
        {!currentUser && <button onClick={clickSignUp}>Sign Up</button>}
      </div>

    </div>
  
  )
}
