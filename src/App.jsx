import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import VideoDetail from "./pages/VideoDetail";
import Homepage from "./pages/Homepage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video-detail" element={<VideoDetail />} />
      </Routes>
    </>
  );
}

export default App;
