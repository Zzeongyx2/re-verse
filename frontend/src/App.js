import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./UI/pages/Index";
import Login from "./UI/pages/Login";
import Signin from "./UI/pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
