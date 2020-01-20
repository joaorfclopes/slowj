import React from "react";
import Home from "./Home";
import Bio from "./Bio";
import Media from "./Media";
import ScrollTop from "../components/buttons/ScrollTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import $ from "jquery";

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
    if (screenWidth >= 700) {
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
    if (isDesktop === true && isMobile === false) {
      return (
        <div className="main">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home id="home" isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
              <Route path="/bio">
                <Bio isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
              <Route path="/media">
                <Media isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
            </Switch>
          </Router>
          <ScrollTop />
        </div>
      );
    }
    if (isDesktop === false && isMobile === true) {
      return (
        <div className="main">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home id="home" isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
              <Route path="/bio">
                <Bio isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
              <Route path="/media">
                <Media isDesktop={isDesktop} isMobile={isMobile} />
              </Route>
            </Switch>
          </Router>
          <ScrollTop />
        </div>
      );
    }
  }
}
