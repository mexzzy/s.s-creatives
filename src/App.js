import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { styled } from "styled-components";
import logo from "./images/LOGO.png";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Works from "./pages/Works";
import Resume from "./pages/Resume";

import coverBg from "../src/images/coverBg.png";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDiv(false);
      }
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <Application>
        <span id="home">
          <NavBar>
            <img src={logo} alt="logo" />
            <MenuToggle ref={buttonRef} onClick={handleButtonClick}>
              <i className="fi fi-sr-menu-burger"></i>
            </MenuToggle>
            <MenuList>
              <>
                <a href="#home">
                  <span>Home</span>
                </a>
                <a href="#about">
                  <span>About</span>
                </a>
                <a href="#contact">
                  <span>Contact</span>
                </a>
                <a href="#works">
                  <span>Works</span>
                </a>
                <a href="#resume">
                  <span>Resum&eacute;</span>
                </a>
              </>
            </MenuList>
          </NavBar>
          <Home />
        </span>
      </Application>
      <DisplayPageRoute>
        <span id="about">
          <About />
        </span>
        <span id="contact">
          <Contact />
        </span>
        <span id="works">
          <Works />
        </span>
        <span id="resume">
          <Resume />
        </span>
      </DisplayPageRoute>
    </>
  );
}

export default App;

const Application = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#00000037, #00000037), url(${coverBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  transition: all 1s ease;
  z-index: 3;
  box-shadow: 1px 1px 10px #00000040;
  backdrop-filter: blur(3px);
  z-index: 2;

  img {
    width: 60px;
    @media (max-width: 768px) {
      width: 50px;
    }
  }
`;
const DisplayPageRoute = styled.div`
  width: 100%;
  height: auto;
`;

const MenuToggle = styled.div`
  background-image: linear-gradient(
    258deg,
    rgb(95, 33, 17, 0.342),
    rgba(14, 14, 68, 0.142)
  );
  backdrop-filter: blur(5px);
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgba(119, 130, 230, 0.068);
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
const MenuList = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  text-decoration: none;
  a {
    color: #fff;

    &:hover {
      font-size: 17px;
    }
  }
`;
