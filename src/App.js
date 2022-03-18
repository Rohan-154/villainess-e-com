import "./App.css";
// import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Body } from "./Routes/homeBody/body.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}
export default App;
