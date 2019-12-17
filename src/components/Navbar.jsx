import React from "react";
import logo from "../assets/svg/logo_white.svg";
import $ from "jquery";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true,
      isMobile: false
    };
  }
  resize() {
    const screenWidth = $(window).width();
    if (screenWidth > 700) {
      this.setState({ isDesktop: true, isMobile: false });
    } else {
      this.setState({ isDesktop: false, isMobile: true });
    }
  }
  updateDimensions = () => {
    this.resize();
  };
  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    this.resize();
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    if (this.state.isDesktop === true && this.state.isMobile === false) {
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
                <li className="link linkDesktop linkMargin homeLink active">
                  <a className="linkTo" href="/">
                    Home
                  </a>
                </li>
                <li className="link linkDesktop bioLink linkMargin">
                  <a className="linkTo" href="/bio">
                    Bio
                  </a>
                </li>
                <li className="link linkDesktop mediaLink">
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
    if (this.state.isDesktop === false && this.state.isMobile === true) {
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
