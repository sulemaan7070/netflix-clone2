import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const history = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newEmail = useRef(null);
  const newPassword = useRef(null);
  {
    /**The prevent default() allows to
     *  avaoid the default refreshing style of a form*/
  }

  const register = (event) => {
    event.preventDefault();
    {/*
    *The auth function below is used to create a new user with the email and password
    the emailRef.current.value will hel us poiting to the email entered in the register form and same for the password
   */}
    auth
      .createUserWithEmailAndPassword(
        newEmail.current.value,
        newPassword.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
    <div className="screenBoxes">
    <div className="signUpScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          onClick={signIn}
          
        >
          Sign In
        </motion.button>
        
      </form>
    
    </div>

    
      <div className="createUser__screen">
      <form>
        <h1>Create an account</h1>
        <input ref={newEmail} type="email" placeholder="Email" />
        <input ref={newPassword} type="password" placeholder="password" />
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          onClick={register}
          
        >
          Create new account and login
        </motion.button>

        <h4>
          <span className="signUpScreen__gray">New to netflix?</span>
          <motion.span
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            className="signUpScreen__link"
            
          >
            Sign up now
          </motion.span>
        </h4>


      </form>
       </div>
      </div>
    </>

  );
}

export default SignUpScreen;
