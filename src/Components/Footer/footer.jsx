const Footer = () => {
  return (
    // <!-- Footer -->
    <div className="footer-basic">
      <footer>
        <p className="signature">
          {" "}
          Made with <i className="fas fa-code"></i> by Rohan Dubey{" "}
        </p>
        <div className="social">
          <a href="https://github.com/Rohan-154/Villainess-E-Commerce">
            {" "}
            <i className="fab fa-github fa-lg"></i>{" "}
          </a>
          <a href="https://twitter.com/Rohan_415?s=09">
            {" "}
            <i className="fab fa-twitter fa-lg"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/in/rohan-dubey-2854b9201/">
            {" "}
            <i className="fab fa-linkedin fa-lg"></i>{" "}
          </a>
          <p className="copyright">Villainess © 2022 </p>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
