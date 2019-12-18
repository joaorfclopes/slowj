import React from "react";
import $ from "jquery";
import Button1 from "../buttons/Button1";

export default class Section1 extends React.Component {
  scrollToSection2() {
    $("html, body").animate(
      {
        scrollTop: $(".homeSection2").offset().top
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
            <Button1 text="Entrar" />
          </div>
        </div>
      </div>
    );
  }
}
