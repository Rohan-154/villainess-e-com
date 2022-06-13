import { useAuth } from "../../Context/authContext";
import { usePasswordToggle } from "../../custom-hooks/passwordToggle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../Login/login.css";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import logInImg from '../../Assets/login.png';
const Login = () => {
  const { loginHandler, logInData } = useAuth();
  const { passwordToggle, togglePassword } = usePasswordToggle(); //togglepassword is function
  useEffect(()=>{document.title='Login'},[])
  return (
    <div className="login-div">
      <div className="login-img top-margin-7rem">
        <div className="login-details">
      <h2 className="spacer-1rem color-white">Login</h2>
      <p> Get access to your cart, wishlist and profile. </p>
      </div>
      <img src={logInImg} className='login-img-hero'/>
      </div>
    <div className="login-wrapper">
      
      <form className="submit-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          id="input-email"
          className="input-primary"
          placeholder="test@testing.com"
          value={logInData.email}
          name="email"
          autoComplete="hidden"
          readOnly
          required
        />

        <div className="eye-container">
          <input
            type={passwordToggle.type}
            id="input-password"
            className="input-primary spacer-1rem"
            placeholder="Enter your password here"
            name="password"
            value={logInData.password}
            autoComplete="hidden"
            readOnly
            required
          />
          <button className="eye-btn">
            {passwordToggle.eyeIcon ? (
              <FaRegEye onClick={togglePassword} />
            ) : (
              <FaRegEyeSlash onClick={togglePassword} />
            )}
          </button>
        </div>
        <button
          className="btn-login login-test"
          type="submit"
          onClick={loginHandler}
        >
          Login With Test Credentials
        </button>
        {/* <button className="btn-login login spacer-1rem" type="submit">
          Login
        </button> */}
        <div className="singup-nav">
          Not registered yet?
          <Link to='/signup' className="create-acc">
            Create Your Account
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export { Login };
