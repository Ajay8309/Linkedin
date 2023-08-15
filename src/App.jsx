import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
// import Register from "./Register/Register";
import Login from "./components/Login";
import Home from "./components/Home";
// import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <ToastContainer transition={Zoom} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
