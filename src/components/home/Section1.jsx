import React from "react";
import $ from "jquery";
import BasicButton from "../buttons/BasicButton";

export default class Section1 extends React.Component {
  scrollToSection2() {
    $("html, body").animate(
      {
        scrollTop: $(".homeSection4").offset().top
      },
      500,
      "linear"
    );
  }
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="homeSection1">
          <div className="entrarButtonContainer entrarButtonContainerDesktop">
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
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="homeSection1">
          <div className="entrarButtonContainer entrarButtonContainerMobile">
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
}
