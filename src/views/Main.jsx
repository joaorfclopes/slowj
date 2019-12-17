import React from "react";
import Home from "./Home";
import Bio from "./Bio";
import Media from "./Media";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  render() {
    return (
      <div className="main" id="outerContainer">
        <main id="pageWrap">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/media">
                <Media />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}
