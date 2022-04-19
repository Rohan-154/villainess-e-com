import { useAuth } from "../../Context/authContext";
import "../Dashboard/profilePage.css";
import { NavLink } from "react-router-dom";
const ProfilePage = () => {
  const { userBio, logOutHandler } = useAuth();
  const { firstName, lastName, email } = userBio;
  const dashRoutes = [
    { title: "Profile", link: "/dashboard" },
    { title: "Address", link: "/address" },
  ];
  const getActiveStyle = ({isActive})=> ({
       color: isActive ? "green" : "",
       borderBottom: 'none'
  });
  return (
    <>
      <div className="top-margin-7rem">
        <div class="all-card-collection a-c-c-dashboard">
          <h1>Account Settings </h1>
          <div class="card-container c-c-dashboard">
            <main class="main-body main-body-dashboard">
              <footer class="footer-card f-c-dashboard">
                {dashRoutes.map(({ title, link }) => (
                  <NavLink
                    key={title}
                    style={getActiveStyle}
                    to={link}
                  >
                    <button class="btn-primary-card btn-p-c-dashboard">{title}</button>
                  </NavLink>
                ))}
              </footer>
              <h3 class="card-title underline">Profile Details</h3>
              <p>
                Name : {firstName} {lastName}
              </p>
              <p>Email : {email}</p>
              <h3 class="card-title underline"> Account Settings </h3>
              <button
                className="btn-login login-test btn-logout-dashboard"
                type="submit"
                onClick={logOutHandler}
              >
                Logout
              </button>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfilePage };
