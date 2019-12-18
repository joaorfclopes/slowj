import React from "react";
import Home from "./Home";
import Bio from "./Bio";
import Media from "./Media";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

$(window).scroll(function() {
  if ($(window).scrollTop() >= 100) {
    $(".navbar").css("height", "65px");
    $(".navbarContainer").css("height", "65px");
  } else {
    $(".navbar").css("height", "55px");
    $(".navbarContainer").css("height", "55px");
  }
});

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true,
      isMobile: false
    };
  }
  resize() {
    const screenWidth = $(window).width();
    if (screenWidth > 1000) {
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
    const isDesktop = this.state.isDesktop;
    const isMobile = this.state.isMobile;
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home isDesktop={isDesktop} isMobile={isMobile} />
            </Route>
            <Route path="/bio">
              <Bio isDesktop={isDesktop} isMobile={isMobile} />
            </Route>
            <Route path="/media">
              <Media isDesktop={isDesktop} isMobile={isMobile} />
            </Route>
          </Switch>
        </Router>
        <ScrollUpButton
          EasingType="linear"
          ShowAtPosition={200}
        ></ScrollUpButton>
      </div>
    );
  }
}
