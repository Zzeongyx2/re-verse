import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NonLoginMain from "./UI/pages/NonLoginMain";
import Login from "./UI/pages/Login";
import Signin from "./UI/pages/Signin";
import TestPage from "./UI/pages/TestPage";
import Lobby from "./UI/pages/Lobby";
import Character from "./UI/pages/Character";
import Friend from "./UI/pages/Friend";
import Archive from "./UI/pages/Archive";
import NeonTest from "./UI/pages/NeonTest";
import ReverseTemp from "./UI/pages/ReverseTemp";
import ReverseWebRTC from "./UI/pages/ReverseWebRTC";
import { EditorComponent } from "./UI/organisms/TextEditor";
import ReverseTextEditor from "./UI/organisms/ReverseTextEditor";
import ReverseHelper from "./UI/pages/ReverseHelper";
import LazyAudio from "./UI/pages/LazyAudio";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      {/* <div className="bg-base2 h-screen mx-auto px-14 my-auto py-10 font-sans"> */}
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<NonLoginMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/character" element={<Character />} />
          <Route path="/friend/*" element={<Friend />} />
          <Route path="/archive/*" element={<Archive />} />
          <Route path="/neontest" element={<NeonTest />} />
          <Route path="/reverse/:archiveId" element={<ReverseHelper />} />
          <Route path="/reversetemp/:archiveId" element={<ReverseTemp />} />
          <Route path="/reverse/rtc" element={<ReverseWebRTC />} />
          <Route path="/texteditor" element={<ReverseTextEditor />} />
          <Route path="/audiote/:archiveId" element={<LazyAudio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
