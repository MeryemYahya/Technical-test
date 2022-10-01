import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import Context from '../context/context';

export function PrivateRoute({ children }) {

  const { connected } = useContext(Context);

  if (connected) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}