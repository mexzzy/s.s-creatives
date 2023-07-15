import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { styled } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./images/LOGO.png";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Works from "./pages/Works";
import Resume from "./pages/Resume";
import Page404 from "./pages/Page404";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const buttonRef = useRef();
  const [activeLink, setActiveLink] = useState("/");

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

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Application>
        <NavBar >
          <img src={logo} alt="logo" />
          <MenuToggle ref={buttonRef} onClick={handleButtonClick}>
            <i className="fi fi-sr-menu-burger"></i>
          </MenuToggle>
          <div className={`Nav ${showDiv ? "show" : ""}`}>
            <Link
              to="/"
              className={`Link ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              <i className="fi fi-sr-house-window"></i>
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`Link ${activeLink === "/about" ? "active" : ""}`}
              onClick={() => handleLinkClick("/about")}
            >
              <i class="fi fi-ss-user"></i>
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className={`Link ${activeLink === "/contact" ? "active" : ""}`}
              onClick={() => handleLinkClick("/contact")}
            >
              <i className="fi fi-sr-square-phone-hangup"></i>
              <span>Contact</span>
            </Link>
            <Link
              to="/works"
              className={`Link ${activeLink === "/works" ? "active" : ""}`}
              onClick={() => handleLinkClick("/works")}
            >
              <i className="fi fi-sr-edit-alt"></i>
              <span>Work</span>
            </Link>
            <Link
              to="/resume"
              className={`Link ${activeLink === "/resume" ? "active" : ""}`}
              onClick={() => handleLinkClick("/resume")}
            >
              <i className="fi fi-sr-document"></i>
              <span>Resum&eacute;</span>
            </Link>
          </div>
        </NavBar>
        <DisplayPageRoute>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </DisplayPageRoute>
      </Application>
    </>
  );
}

export default App;

const Application = styled.div`
  background-image: linear-gradient(
    to left top,
    rgb(0, 7, 68),
    #000f92,
    #389fe1
  );
  width: 100%;
  height: auto;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  transition: all 1s ease ;
  z-index: 3;

  @media (max-width: 768px) {
    position: ${props => (props.fixed ? 'fixed' : 'static')};
    background: ${props => (props.background ? " rgba(12, 12, 110, 0.199) " : "transparent")};
    width: ${props => (props.width ? "100%" : "auto")};
    backdrop-filter: blur(30px);
    top: 0;
  }
  img {
    width: 80px;
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
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(119, 130, 230, 0.068);
  display: none;
  cursor: pointer;
  box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.485);

  @media (max-width: 768px) {
    display: block;
  }
`;
