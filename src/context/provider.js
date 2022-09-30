import React, { useState, useEffect } from "react";
import Context from "./context";



const Provider = (props) => {

  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('email');
    console.log(user);
    user && setConnected(true)
  }, [])

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