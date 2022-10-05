import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";

// Firebase

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase-config";

const Signup = () => {
    let navigate = useNavigate();
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    
      const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
    setError(true)
   
  });
  
  };

        



  return (
    <div className="container signup">
      <p className="h3 mx-3">Create a DEV@Deakin Account</p>
      <form className="form" onSubmit={handleSubmit}>
       
        <Input
          htmlFor="email"
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="error-message">
              {error.emailError}
            </div>
        <Input
          htmlFor="password"
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        
        <Button  label="Signup" isNavbar={false} />
      </form>
    </div>
  );
};

export default Signup;
