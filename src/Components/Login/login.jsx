import { useAuth } from "../../Context/authContext";
import { usePasswordToggle } from "../../custom-hooks/passwordToggle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import '../Login/login.css';
const Login = () => {
  const { loginHandler, logInData } = useAuth();
  const { passwordToggle, togglePassword } = usePasswordToggle(); //togglepassword is function
  return (
    <div className="login-wrapper">
      <h2 className="spacer-1rem">Login</h2>
      <form className="submit-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          id="input-id"
          className="input-primary"
          placeholder="test@testing.com"
          value={logInData.email}
          name="email"
          required
        />

        <div className="eye-container">
          <input
            type={passwordToggle.type}
            id="input-id"
            className="input-primary spacer-1rem"
            placeholder="Enter your password here"
            name="password"
            value={logInData.password}
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
          <a href="/Components-E-Com/signup.html" className="create-acc">
            Create Your Account
          </a>
        </div>
      </form>
    </div>
  );
};

export { Login };
