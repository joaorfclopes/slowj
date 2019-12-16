import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Bio from "./Bio";
import Media from "./Media";
import Footer from "../components/Footer";
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

export default function Main() {
  return (
    <div className="main">
      <Router>
        <Navbar />
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
        <Footer />
      </Router>
    </div>
  );
}
