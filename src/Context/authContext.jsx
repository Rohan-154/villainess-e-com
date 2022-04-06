const { createContext, useContext, useState } = require("react");
import axios from "axios";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [token, setToken] = useState(localStorageToken && localStorageToken.token);
  const [userBio, setuserBio] = useState();
  const [logInData, setLogInData] = useState({
    email: "rohandubey154@gmail.com",
    password: "rohan123",
  });
  const navigate = useNavigate();
  const loginHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", logInData);
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: data.encodedToken,
        })
      );
      setToken(data.encodedToken);
      setuserBio(data.foundUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logOutHandler = ()=>{
      setTimeout(() => {
          localStorage.removeItem('loginToken');
          setToken('');
          setuserBio({});
          navigate('/')
      }, 1000);
  };
  return <AuthContext.Provider value={{
      token,
      setToken,
      loginHandler,
      logInData,
      logOutHandler,
      userBio
  }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
const AuthContext = createContext();
export{useAuth, AuthProvider}