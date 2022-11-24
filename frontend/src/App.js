import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NonLoginMain from "./UI/pages/NonLoginMain";
import Login from "./UI/pages/Login";
import Signin from "./UI/pages/Signin";
import Lobby from "./UI/pages/Lobby";
import Character from "./UI/pages/Character";
import Friend from "./UI/pages/Friend";
import Archive from "./UI/pages/Archive";
import ReverseHelper from "./UI/pages/ReverseHelper";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto my-auto">
        <Routes>
          <Route path="/" element={<NonLoginMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/character" element={<Character />} />
          <Route path="/friend/*" element={<Friend />} />
          <Route path="/archive/*" element={<Archive />} />
          <Route path="/reverse/:archiveId" element={<ReverseHelper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
