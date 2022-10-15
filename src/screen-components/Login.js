import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";
import { motion } from "framer-motion";

function Login() {
  const [signIN, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        {/** here we are conditionally rendering the Sign In screen when user
        clicks on either of the "Sign in" button or "get started" button **/}
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSignIn(true)}
          className="loginScreen__button"
        >
          Sign in
        </motion.button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIN ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films,Tv programmes and more </h1>
              <h2>Watch anywhere. Cancel at any time </h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="text" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    Get started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
