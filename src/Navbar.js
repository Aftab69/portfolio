import React from 'react';
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

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
            <HashLink style={navItemStyling} smooth to="#contact"><span>CONTACT</span></HashLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar