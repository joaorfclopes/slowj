import React from "react";
import $ from "jquery";
import BasicButton from "../buttons/BasicButton";

export default class Section1 extends React.Component {
  scrollToSection2() {
    $("html, body").animate(
      {
        scrollTop: $(".homeSection2").offset().top - 55
      },
      500,
      "linear"
    );
  }
  render() {
    return (
      <div className="homeSection1">
        <div className="entrarButtonContainer">
          <div className="entrarButton" onClick={this.scrollToSection2}>
            <BasicButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              text="Entrar"
            />
          </div>
        </div>
      </div>
    );
  }
}
