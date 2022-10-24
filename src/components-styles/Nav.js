import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { motion } from "framer-motion";
/**
 *
 * the useHistory hook is chnaged as useNavigate in latest version of react-router-dom.
 */
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <motion.img
          whileHover={{
            scale: 1.4,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => history("/")}
          className="nav__logo"
          src="https://i.imgur.com/jwmMGqt.png"
          alt=""
        />
        
        {/*
         * The history.push(path) method is deprecated to "history(path"
         */}
        <motion.img
        whileHover={{
          scale: 1.4,
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
          onClick={() => history("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
