import "./App.css";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import{NavBar} from './Components/Navbar/navbar.jsx';
import {Body} from '../src/Components/homeBody/body';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}
export default App;
