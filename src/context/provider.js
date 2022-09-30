import React, { useState } from "react";
import Context from "./context";



const Provider = (props) => {


  return (
    <Context.Provider
      value={{
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Provider;