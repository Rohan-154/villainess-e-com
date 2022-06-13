import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Body } from "./Routes/homeBody/body.jsx";
import { ShopNow } from "./Routes/Products/shopNow.jsx";
import { NavBar } from "./Components/Navbar/navbar.jsx";
import { CartCard } from "./Components/CartCard/cartCard.jsx";
import { Login } from "./Components/Login/login.jsx";
import { WishlistCard } from "./Components/WishlistCard/wishlistCard.jsx";
import { ProfilePage } from "./Components/Dashboard/profilePage.jsx";
import { SignUp } from "./Components/Sign-Up/signup.jsx";
import { SingleProduct } from "./Components/SingleProductPage/singleProduct.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/shopNow" element={<ShopNow />} />
        <Route path="/cart" element={<CartCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/wishlist" element={<WishlistCard />} />
        <Route path="/dashboard" element={<ProfilePage/>} />
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}
export default App;
