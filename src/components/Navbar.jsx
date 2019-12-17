import React from "react";
import logo from "../assets/svg/logo_white.svg";

export default class Navbar extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="navbar">
          <div className="navbarContainer navbarContainerDesktop">
            <div className="navLogo navLogoDesktop">
              <a className="linkTo" href="/">
                <img className="logo logoDesktop" src={logo} alt="logo" />
              </a>
            </div>
            <div className="navLinks navLinksDesktop">
              <ul className="links linksDesktop">
                <li
                  className="link linkDesktop linkMargin homeLink"
                  id={
                    this.props.home === true &&
                    this.props.bio === false &&
                    this.props.media === false
                      ? "active"
                      : null
                  }
                >
                  <a className="linkTo" href="/">
                    Home
                  </a>
                </li>
                <li
                  className="link linkDesktop bioLink linkMargin"
                  id={
                    this.props.home === false &&
                    this.props.bio === true &&
                    this.props.media === false
                      ? "active"
                      : null
                  }
                >
                  <a className="linkTo" href="/bio">
                    Bio
                  </a>
                </li>
                <li
                  className="link linkDesktop mediaLink"
                  id={
                    this.props.home === false &&
                    this.props.bio === false &&
                    this.props.media === true
                      ? "active"
                      : null
                  }
                >
                  <a className="linkTo" href="/media">
                    Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="navbar">
          <div className="navbarContainer navbarContainerMobile">
            <div className="navLogo navLogoMobile">
              <img className="logo logoMobile" src={logo} alt="logo" />
            </div>
            <div className="navLinks navLinksMobile"></div>
          </div>
        </div>
      );
    }
  }
}
