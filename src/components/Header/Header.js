import React from "react";
import Navbar from "./Navbar/Navbar";
import profilePic from "../../images/profile-image.jpg";

function Header() {
  const social_media_data = [
    {
      title: "Twitter",
      link: "https://twitter.com/farhad_dev",
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      title: "Github",
      link: "https://github.com/farhad-gh-dev",
      icon: <i className="fab fa-github"></i>,
    },
    {
      title: "Linked In",
      link: "https://www.linkedin.com/in/farhad-gholami-dev/",
      icon: <i className="fab fa-linkedin"></i>,
    },
  ];

  return (
    <div className="header" id="home">
      <Navbar />
      <div className="my-icons">
        {social_media_data.map((item) => {
          const { title, link, icon } = item;
          return (
            <a
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          );
        })}
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-7 col-xl-6 text-area text-right">
            <h1>سلام، من فرهاد هستم</h1>
            <div className="my-stroke"></div>
            <p>
              یه Web Developer بیست و یک ساله که عاشق برنامه نویسی و یادگرفتن
              تکنولوژی های جدید وبه. کار من زندگی بخشیدن به ایده های خلاقانه در
              کنار آدمای شگفت انگیزه.
            </p>
          </div>

          <div className="col-5 col-md-4 col-xl-3">
            <div className="box">
              <img src={profilePic} alt="profile_picture"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
