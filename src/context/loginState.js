import LoginContext from "./login";
import { useState } from "react";

const LoginState = (props) => {
  const [isReDirect, setIsReDirect] = useState(true);
  const state = {
    isRedirect: isReDirect,
    setIsReDirect: setIsReDirect,
  };
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;

// import { createContext } from "react";
// import { useState } from "react";

// const [isReDirect, setIsReDirect] = useState(true);

// const LoginContext = createContext({
//   isReDirect: isReDirect,
//   setIsReDirect: setIsReDirect,
// });

// export default LoginContext;
