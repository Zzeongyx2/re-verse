import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NonLoginMain from "./UI/pages/NonLoginMain";
import Login from "./UI/pages/Login";
import Signin from "./UI/pages/Signin";
import TestPage from "./UI/organisms/TestPage";
import Lobby from "./UI/pages/Lobby";
import SelectCharacter from "./UI/pages/SelectCharacter";
import Friend from "./UI/pages/Friend";
import Archive from "./UI/pages/Archive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NonLoginMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/character" element={<SelectCharacter />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
