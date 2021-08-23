import React from "react";

function Footer() {
  return (
    <section className="footer my-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="m-0">
              &copy; Copyright 2019. designed by{" "}
              <a href="#home">Farhad Gholami</a>
            </p>
          </div>
          <div className="col-lg-6 text-right icon-container">
            <a
              href="https://twitter.com/farhad_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/farhad-gh-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/farhad-gholami-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
