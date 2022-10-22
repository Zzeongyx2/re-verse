import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./UI/pages/Login";
import Signin from "./UI/pages/Signin";
import Main from "./UI/pages/Main";
import ThreeTest from "./UI/pages/ThreeTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/test" element={<ThreeTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
