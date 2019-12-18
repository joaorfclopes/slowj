import React from "react";
import logo from "../../assets/svg/logo_white.svg";
import menuLogo from "../../assets/svg/menu.svg";
import $ from "jquery";

export default class Navbar extends React.Component {
  openMenu() {
    $(".sidenav").addClass("sidenavOpened");
  }
  render() {
    $(document).mouseup(function(e) {
      var container = $(".sidenav");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".sidenav").removeClass("sidenavOpened");
      }
    });
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="navbar navbarDesktop">
          <div className="navbarContainer navbarContainerDesktop">
            <div className="navLogo navLogoDesktop">
              <a className="linkTo linkToDesktop" href="/">
                <img className="logo logoDesktop" src={logo} alt="logo" />
              </a>
            </div>
            <div className="navLinks navLinksDesktop">
              <ul className="links linksDesktop">
                <li
                  className="link linkDesktop linkMargin linkMarginDesktop homeLink"
                  id={
                    this.props.home === true &&
                    this.props.bio === false &&
                    this.props.media === false
                      ? "active"
                      : null
                  }
                >
                  <a className="linkTo linkToDesktop" href="/">
                    Home
                  </a>
                </li>
                <li
                  className="link linkDesktop linkMargin linkMarginDesktop bioLink"
                  id={
                    this.props.home === false &&
                    this.props.bio === true &&
                    this.props.media === false
                      ? "active"
                      : null
                  }
                >
                  <a className="linkTo linkToDesktop" href="/bio">
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
                  <a className="linkTo linkToDesktop" href="/media">
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
        <div className="navbar navbarMobile">
          <div className="navbarContainer navbarContainerMobile">
            <div className="navLogo navLogoMobile">
              <a className="linkTo linkToMobile" href="/">
                <img className="logo logoMobile" src={logo} alt="logo" />
              </a>
            </div>
            <div className="navLinks navLinksMobile">
              <div className="menu" onClick={this.openMenu}>
                <div className="menuTitle">Menu</div>
                <div className="menuImage">
                  <img className="menuLogo" src={menuLogo} alt="menuLogo" />
                </div>
              </div>
            </div>
          </div>
          <div className="sidenav">
            <ul className="links linksMobile">
              <li
                className="link linkMobile linkMargin linkMarginMobile homeLink"
                id={
                  this.props.home === true &&
                  this.props.bio === false &&
                  this.props.media === false
                    ? "active"
                    : null
                }
              >
                <a className="linkTo linkToMobile" href="/">
                  Home
                </a>
              </li>
              <li
                className="link linkMobile linkMargin linkMarginMobile bioLink"
                id={
                  this.props.home === false &&
                  this.props.bio === true &&
                  this.props.media === false
                    ? "active"
                    : null
                }
              >
                <a className="linkTo linkToMobile" href="/bio">
                  Bio
                </a>
              </li>
              <li
                className="link linkMobile mediaLink"
                id={
                  this.props.home === false &&
                  this.props.bio === false &&
                  this.props.media === true
                    ? "active"
                    : null
                }
              >
                <a className="linkTo linkToMobile" href="/media">
                  Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}
