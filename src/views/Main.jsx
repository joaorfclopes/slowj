import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Bio from "./Bio";
import Media from "./Media";
import Footer from "../components/Footer";
import $ from "jquery";

$(window).scroll(function() {
  if ($(window).scrollTop() >= 100) {
    $(".navbar").css("height", "7.5vh");
  } else {
    $(".navbar").css("height", "6vh");
  }
});

export default function Main() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Bio />
      <Media />
      <Footer/>
    </div>
  );
}
