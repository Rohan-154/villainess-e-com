const { createContext, useContext, useState } = require("react");
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
toast.configure();
const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [token, setToken] = useState(
    localStorageToken && localStorageToken.token
  );
  const [userBio, setuserBio] = useState(localStorageToken && localStorageToken.user);
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
          user:data.foundUser,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
