import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/counter/userSlice";
import ProfileScreen from "./ProfileScreen";
/**
 * In react-router-dom version v6+ the "Switch" has been replaced with "Routes"
 * import { Switch, Route } from "react-router-dom";
 */

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        // console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }
        ))
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}

        {/* <Routes>
          <Route  path="/login"  element={<Login/>} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
