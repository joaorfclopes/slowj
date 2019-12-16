import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/svg/logo_white.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function reload() {
  setTimeout(() => {
    window.location.reload();
  }, 1);
}

export default function Navbar() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  return (
    <div className="navbar">
      {isDesktop && (
        <>
          <Router>
            <div className="navbarContainer navbarContainerDesktop">
              <div className="navLogo navLogoDesktop">
                <img className="logo logoDesktop" src={logo} alt="logo" />
              </div>
              <div className="navLinks navLinksDesktop">
                <ul className="links linksDesktop">
                  <li className="link linkDesktop linkMargin">
                    <Link className="linkTo" to="/" onClick={reload}>
                      Home
                    </Link>
                  </li>
                  <li className="link linkDesktop linkMargin">
                    <Link className="linkTo" to="/bio" onClick={reload}>
                      Bio
                    </Link>
                  </li>
                  <li className="link linkDesktop">
                    <Link className="linkTo" to="/media" onClick={reload}>
                      Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Router>
        </>
      )}
      {isMobile && (
        <>
          <div className="navbarContainer navbarContainerMobile">
            <div className="navLogo navLogoMobile">
              <img className="logo logoMobile" src={logo} alt="logo" />
            </div>
            <div className="navLinks navLinksMobile"></div>
          </div>
        </>
      )}
    </div>
  );
}
