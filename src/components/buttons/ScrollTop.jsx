import React from "react";
import arrowUp from "../../assets/svg/arrow_up.svg";
import $ from "jquery";

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 500);
}

export default class ScrollTop extends React.Component {
  render() {
    return (
      <div className="scrollUp" onClick={scrollToTop}>
        <img className="arrowUp" src={arrowUp} alt="arrowUp" />
      </div>
    );
  }
}
