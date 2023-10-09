import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import About from './pages/About';
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/Signout" element={<Signout/>}></Route>

        </Routes>
    </BrowserRouter>
    
  );
}
