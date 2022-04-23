import { usePasswordToggle } from "../../custom-hooks/passwordToggle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logInImg from "../../Assets/login.png";
import "../Sign-Up/signup.css";
import { useAuth } from "../../Context/authContext";
import { useForm } from "../../custom-hooks/useForm";
const SignUp = () => {
  const {
    passwordToggle,
    togglePassword,
    confirmPasswordToggle,
    toggleConfirmPassword,
  } = usePasswordToggle(); //togglepassword is function
  const { signUpHandler } = useAuth();
  const { formData, errors, formHandler } = useForm();

  return (
    <div>
      {<p className="top-margin-7rem error-msg">{errors.match}</p>}
      <div className="login-div">
        <div className="login-img top-margin-7rem signup-img">
          <div className="login-details">
            <h2 className="spacer-1rem color-white">Sign-Up</h2>
            <p>
              {" "}
              Create an account now and get quality products at discounted rate.{" "}
            </p>
          </div>
          <img src={logInImg} className="login-img-hero" />
        </div>
        <div className="login-wrapper signup-wrapper">
          <form className="submit-form" onSubmit={(e) => e.preventDefault()}>
            <label for="label-id" class="input-id-mandatory">
              {" "}
              First Name{" "}
            </label>
            <input
              type="text"
              className="input-primary"
              placeholder="Your First Name"
              name="firstName"
              autoComplete="hidden"
              required
              onChange={formHandler}
            />
            <label for="label-id" class="input-id-mandatory">
              {" "}
              Last Name{" "}
            </label>
            <input
              type="text"
              className="input-primary"
              placeholder="Your Last Name"
              name="lastName"
              autoComplete="hidden"
              onChange={formHandler}
              required
            />
            <label for="label-id" class="input-id-mandatory">
              {" "}
              Email
            </label>
            <input
              type="email"
              className="input-primary"
              placeholder="test@testing.com"
              //   value={logInData.email}
              name="email"
              autoComplete="hidden"
              onChange={formHandler}
              required
            />
            <label for="label-id" class="input-id-mandatory">
              {" "}
              Password
            </label>
            <div className="eye-container">
              <input
                id="input-password"
                className="input-primary spacer-1rem"
                placeholder="Enter your password here"
                name="password"
                onChange={formHandler}
                required
                autoComplete="hidden"
                type={passwordToggle.type}
              />
              <button className="eye-btn-p">
                {passwordToggle.eyeIcon ? (
                  <FaRegEye onClick={togglePassword} />
                ) : (
                  <FaRegEyeSlash onClick={togglePassword} />
                )}
              </button>
            </div>
            <label for="label-id" class="input-id-mandatory">
              {" "}
              Confirm Password
            </label>
            <div className="eye-container">
              <input
                className="input-primary spacer-1rem input-c-p"
                placeholder="Enter your password here"
                name="confirmPassword"
                autoComplete="hidden"
                type={confirmPasswordToggle.type}
                onChange={formHandler}
              />
              <button className="eye-btn-c-p">
                {confirmPasswordToggle.eyeIcon ? (
                  <FaRegEye onClick={toggleConfirmPassword} />
                ) : (
                  <FaRegEyeSlash onClick={toggleConfirmPassword} />
                )}
              </button>
            </div>
            <button
              className="btn-login login-test"
              type="submit"
              onClick={() => signUpHandler(formData)}
              disabled={
                Object.entries(errors).length === 0 &&
                Object.entries(formData).length === 5
                  ? false
                  : true
              }
            >
              Register
            </button>
            <div className="singup-nav">
              Already a user?
              <Link to="/login" className="create-acc">
                Login to Your Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
