import React from "react";
import ReactDOM from "react-dom/client";
import About from "./modules/About.jsx";
import Nav from "./modules/Nav.jsx";
import Tech from "./modules/Tech.jsx";
import Projects from "./modules/Projects.jsx";
import Socials from "./modules/Socials.jsx";
import Photos from "./modules/Photos.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <About />
    <Tech />
    <Projects />
    <Photos />
    <Socials />
  </React.StrictMode>
);
