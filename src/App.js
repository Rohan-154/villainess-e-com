// import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Body } from "./Routes/homeBody/body.jsx";
import { ShopNow } from "./Routes/Products/shopNow.jsx";
import { Footer } from "./Components/Footer/footer.jsx";
import { NavBar } from "./Components/Navbar/navbar.jsx";
function App() {
  return (
    <div className="App">
       <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/shopNow" element={<ShopNow />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
