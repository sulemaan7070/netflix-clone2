import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";
import { motion } from "framer-motion";

function LoginreDirect() {
  const [signIN, setSignIn] = useState(false);

  return (
    <div className="twoBoxes">
      <div className="loginScreen">
        <h1 className="successh1">
          Account created successfully!✅ <br /> sign in to continue
        </h1>
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
            <SignUpScreen key="for-redirect" />
          </div>
        </div>
      </div>
      <div className={signIN ? `container` : null}></div>
    </div>
  );
}

export default LoginreDirect;
