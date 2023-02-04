import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**The prevent default() allows to
 *  avaoid the default refreshing style of a form*/

function SignUpScreen(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newEmail = useRef(null);
  const newPassword = useRef(null);
  const history = useNavigate();
  const [need, setNeed] = useState(true);
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    console.log(e.target.type);
    if (e.target.type === "email") {
      setUserMail(e.target.value);
    } else if (e.target.type === "password") {
      setUserPassword(e.target.value);
    }
  };

  const register = (event) => {
    console.log(event.target.name);
    event.preventDefault();

    //*The auth function below is used to create a new user with the email and password
    //the emailRef.current.value will hel us poiting to the email entered in the register form and same for the password

    auth
      .createUserWithEmailAndPassword(userMail, userPassword)
      .then((authUser) => {
        console.log(authUser);
        setTimeout(() => {
          alert("user created successfully");
        }, 2000);
        history("/login");
        auth.signOut();
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
        history("/");
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="screenBoxes">
        {need ? (
          <>
            <div className="signUpScreen">
              <form>
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                />
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
                <span className="signUpScreen__gray">New to netflix?</span>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="signUpScreen__link"
                  onClick={() => setNeed((prev) => !prev)}
                >
                  Sign up now!
                </motion.span>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="createUser__screen">
              <form>
                <h1>Create an account</h1>
                <input
                  ref={newEmail}
                  onChange={createUser}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={createUser}
                  ref={newPassword}
                  type="password"
                  placeholder="password"
                />
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  onClick={register}
                >
                  Create new account
                </motion.button>

                <h4>
                  <span className="signUpScreen__gray">
                    Existing user login!
                  </span>
                  <motion.span
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="signUpScreen__link"
                    onClick={() => setNeed((prev) => !prev)}
                  >
                    here!
                  </motion.span>
                </h4>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SignUpScreen;
