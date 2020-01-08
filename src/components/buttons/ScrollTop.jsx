import React from "react";
import arrowUp from "../../assets/svg/arrow_up.svg";
import $ from "jquery";

$(window).scroll(function() {
  if ($(window).scrollTop() >= 200) {
    $(".scrollUp").addClass("show");
    $(".scrollUp").removeClass("hide");
  } else {
    $(".scrollUp").removeClass("show");
    $(".scrollUp").addClass("hide");
  }
});

$(window).ready(function() {
  if ($(window).scrollTop() >= 200) {
    $(".scrollUp").addClass("show");
    $(".scrollUp").removeClass("hide");
  } else {
    $(".scrollUp").removeClass("show");
    $(".scrollUp").addClass("hide");
  }
});

export default class ScrollTop extends React.Component {
  scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  }
  render() {
    return (
      <div className="scrollUp" onClick={this.scrollToTop}>
        <img className="arrowUp" src={arrowUp} alt="arrowUp" />
      </div>
    );
  }
}
