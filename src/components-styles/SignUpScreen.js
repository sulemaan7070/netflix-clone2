import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  {
    /**The prevent default() allows to
     *  avaoid the default refreshing style of a form*/
  }

  const register = (event) => {
    event.preventDefault();
    {
      /*
    *The auth function below is used to create a new user with the email and password
    the emailRef.current.value will hel us poiting to the email entered in the register form and same for the password
   */
    }
    auth
      .createUserWithEmailAndPassword(
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
    <div className="signUpScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to netflix?</span>
          <span className="signUpScreen__link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
