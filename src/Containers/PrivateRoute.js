import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import Context from '../context/context';


export function PrivateRoute({ children }) {
  let { connected } = useContext(Context);

  if (!connected) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}