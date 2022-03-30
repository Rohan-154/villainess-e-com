import { useAuth } from "../../Context/authContext";
import { usePasswordToggle } from "../../custom-hooks/passwordToggle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const { loginHandler, logInData } = useAuth();
  const { passwordToggle, togglePassword } = usePasswordToggle(); //togglepassword is function
  return (
    <div class="login-wrapper">
      <h2 class="spacer-1rem">Login</h2>
      <form class="submit-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          id="input-id"
          class="input-primary"
          placeholder="test@testing.com"
          value={logInData.email}
          name="email"
          required
        />

        <div class="eye-container">
          <input
            type={passwordToggle.type}
            id="input-id"
            class="input-primary spacer-1rem"
            placeholder="Enter your password here"
            name="password"
            value={logInData.password}
            required
          />
          <button class="eye-btn">
            {passwordToggle.eyeIcon ? (
              <FaRegEye onClick={togglePassword} />
            ) : (
              <FaRegEyeSlash onClick={togglePassword} />
            )}
          </button>
        </div>
        <button
          class="btn-login login-test"
          type="submit"
          onClick={loginHandler}
        >
          Login With Test Credentials
        </button>
        {/* <button class="btn-login login spacer-1rem" type="submit">
          Login
        </button> */}
        <div class="singup-nav">
          Not registered yet?
          <a href="/Components-E-Com/signup.html" class="create-acc">
            Create Your Account
          </a>
        </div>
      </form>
    </div>
  );
};

export { Login };
