import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/svg/logo_white.svg";

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
          <div className="navbarContainer navbarContainerDesktop">
            <div className="navLogo navLogoDesktop">
              <img className="logo logoDesktop" src={logo} alt="logo" />
            </div>
            <div className="navLinks navLinksDesktop"></div>
          </div>
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
