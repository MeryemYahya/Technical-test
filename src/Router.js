import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
import { PrivateRoute } from './Containers/PrivateRoute';
const Router = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/posts' element={<PrivateRoute><Posts /></PrivateRoute>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;