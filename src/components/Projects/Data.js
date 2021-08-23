import React from "react";
import jqueryLogo from "../../images/jq-logo.png";
import webpackLogo from "../../images/webpack-logo.png";
import ReduxLogo from "../../images/redux.png";
import ReactRouterLogo from "../../images/react-router.png";
import NextLogo from "../../images/next.png";
import GatsbyLogo from "../../images/gatsby-js.png";
import MongoDB from "../../images/mongodb.png";
import Jest from "../../images/jest.png";
import Typescript from "../../images/typescript.png";
import Nodejs from "../../images/node.png";
import TailwindLogo from "../../images/tailwind.png";
import AdobeXDLogo from "../../images/adobe-xd.png";

import YummyMenuImage from "../../images/projects/yummy-menu.jpg";
import WikiOlympusImage from "../../images/projects/wiki-olympus.jpg";
import OrganicImage from "../../images/projects/organic.jpg";
import ApexGraphicsImage from "../../images/projects/apex-graphics.jpg";
import PintHouseImage from "../../images/projects/pint-house.jpg";
import WebirdImage from "../../images/projects/webird.jpg";
import StyleAboveImage from "../../images/projects/style-above.jpg";

export const skills = [
  { name: "HTML", icon: <i className="fab fa-html5"></i> },
  { name: "CSS", icon: <i className="fab fa-css3-alt"></i> },
  { name: "JavaScript", icon: <i className="fab fa-js-square"></i> },
  { name: "TypeScript", icon: <img src={Typescript} alt="typescript"></img> },
  { name: "React", icon: <i className="fab fa-react"></i> },
  { name: "Redux", icon: <img src={ReduxLogo} alt="redux"></img> },
  {
    name: "React Router",
    icon: <img src={ReactRouterLogo} alt="react router"></img>,
  },
  { name: "Next Js", icon: <img src={NextLogo} alt="next js"></img> },
  { name: "Gatsby Js", icon: <img src={GatsbyLogo} alt="gatsby js"></img> },
  { name: "Node JS", icon: <img src={Nodejs} alt="node.js"></img> },
  { name: "MongoDB", icon: <img src={MongoDB} alt="mongodb"></img> },
  { name: "Jest", icon: <img src={Jest} alt="jest"></img> },
  { name: "Sass", icon: <i className="fab fa-sass"></i> },
  { name: "Tailwind", icon: <img src={TailwindLogo} alt="tailwind"></img> },
  { name: "Bootstrap", icon: <i className="fab fa-bootstrap"></i> },
  { name: "Github", icon: <i className="fab fa-github"></i> },
  { name: "JQuery", icon: <img src={jqueryLogo} alt="jquery" /> },
  {
    name: "Webpack",
    icon: <img className="webpack" src={webpackLogo} alt="webpack"></img>,
  },
  {
    name: "Adobe XD",
    icon: <img src={AdobeXDLogo} alt="adobe xd"></img>,
  },
];

export const projects_data = [
  {
    name: "Yummy Menu",
    demo_link: "https://yummy-menu.vercel.app",
    github_link: "https://github.com/farhad-gh-dev/yummy-menu",
    project_img: YummyMenuImage,
    technologies: ["html", "next-js", "sass", "mongo-db", "adobe-xd"],
  },
  {
    name: "Wiki Olympus",
    demo_link: "https://olympus-tau.vercel.app/",
    github_link: "https://github.com/farhad-gh-dev/olympus",
    project_img: WikiOlympusImage,
    technologies: [
      "html",
      "react",
      "typescript",
      "redux",
      "react-router",
      "jest",
      "sass",
      "mongo-db",
      "adobe-xd",
    ],
  },
  {
    name: "Organic",
    demo_link: "https://organic-alpha.vercel.app/",
    github_link: "https://github.com/farhad-gh-dev/organic",
    project_img: OrganicImage,
    technologies: ["html", "react", "typescript", "redux", "sass"],
  },
  {
    name: "Apex Graphics",
    demo_link: "https://farhad-gh-dev.github.io/apex-graphics/",
    github_link: "https://github.com/farhad-gh-dev/apex-graphics",
    project_img: ApexGraphicsImage,
    technologies: ["html", "css", "javascript", "jquery", "bootstrap", "sass"],
  },
  {
    name: "Pint House",
    demo_link: "https://farhad-gh-dev.github.io/pint-house/",
    github_link: "https://github.com/farhad-gh-dev/pint-house",
    project_img: PintHouseImage,
    technologies: ["html", "css", "javascript", "jquery", "bootstrap", "sass"],
  },
  {
    name: "Webird",
    demo_link: "https://farhad-gh-dev.github.io/webird/",
    github_link: "https://github.com/farhad-gh-dev/webird",
    project_img: WebirdImage,
    technologies: ["html", "css", "javascript", "jquery", "bootstrap", "sass"],
  },
  {
    name: "Style Above",
    demo_link: "https://farhad-gh-dev.github.io/style-above/",
    github_link: "https://github.com/farhad-gh-dev/style-above",
    project_img: StyleAboveImage,
    technologies: ["html", "css", "jquery", "bootstrap"],
  },
];
