import React from 'react';
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import resume from "./Resume/Resume.pdf"

const Navbar = () => {
    const navItemStyling = {
    "textDecoration" : "none",
    "color":"white"}
  return (
    <>
      <nav>
        <div>
            <HashLink style={navItemStyling} smooth to="#projects"><span>PROJECTS</span></HashLink>
            <HashLink style={navItemStyling} smooth to="#skills"><span>SKILLS</span></HashLink>
            <HashLink style={navItemStyling} smooth to="#certificates"><span>CERTIFICATES</span></HashLink>
            <HashLink style={navItemStyling} smooth to="#contact"><span>CONTACT</span></HashLink>
            <HashLink style={navItemStyling} smooth to={resume} download="Resume" target="_blank"><span>RESUME</span></HashLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar