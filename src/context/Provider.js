import React, { useState } from "react";
import Context from "./Context";



const Provider = (props) => {

  const [connected, setConnected] = useState(localStorage.getItem('email') || false)

  return (
    <Context.Provider
      value={{
        connected,
        setConnected
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Provider;