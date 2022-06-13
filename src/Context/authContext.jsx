const { createContext, useContext, useState } = require("react");
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router";
// import {useProduct} from '../Context/product.jsx';
// toast.configure();
const AuthProvider = ({ children }) => {
  // const {toastProps} = useProduct();
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [token, setToken] = useState(localStorageToken?.token);

  const [userBio, setuserBio] = useState(localStorageToken?.user);
  const [logInData, setLogInData] = useState({
    email: "rohandubey154@gmail.com",
    password: "rohan123",
  });
  const navigate = useNavigate();
  const signUpHandler = async (formData) => {
  
    try {
      const { data, status } = await axios.post("/api/auth/signup", formData);
      if (status === 201) {
        localStorage.setItem(
          "loginToken",
          JSON.stringify({ token: data.encodedToken, user: data.createdUser })
        );
      }
      setToken(data.encodedToken);
      setuserBio(data.createdUser);
      console.log("rohan",data.createdUser);
      // toast.success(`Hi user, you are signed up`, toastProps);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const loginHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", logInData);
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: data.encodedToken,
          user: data.foundUser,
        })
      );
      setToken(data.encodedToken);
      setuserBio(data.foundUser);
      navigate("/shopNow");
    } catch (error) {
      console.log(error);
    }
  };
  const logOutHandler = () => {
    setTimeout(() => {
      localStorage.removeItem("loginToken");
      setToken("");
      setuserBio({});
      navigate("/");
    }, 1000);
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        loginHandler,
        logInData,
        logOutHandler,
        userBio,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
