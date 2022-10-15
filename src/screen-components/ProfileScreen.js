import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components-styles/Nav";
import { selectUser } from "../features/counter/userSlice";
import "./ProfileScreen.css";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const today = new Date();
const future = new Date(today);
future.setDate(future.getDate() + 30);
function ProfileScreen() {
  const history = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="avatar_logo"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>plans (free-plan for next 30 days)</h3>
              <h4 className="renewal">
                {`Renewal date:  ${future.toLocaleDateString()}`}{" "}
              </h4>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                onClick={() => {
                  auth.signOut();
                  history("/");
                }}
                
                className="profileScreen__signOut"
              >
                Sign out
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                className="arrow"
                onClick={() => history("/")}
              >
                ⬅️Explore Netflix
              </motion.button>
            </div>
            {/**profileScreen__plans ended */}
          </div>
        </div>
        {/**prfile screen info ended */}
      </div>
    </div>
  );
}

export default ProfileScreen;
