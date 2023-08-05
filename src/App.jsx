import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
// import Register from "./Register/Register";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <ToastContainer transition={Zoom} />
      </BrowserRouter>
    </>
  );
};

export default App;
