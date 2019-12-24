import React from "react";

export default class BasicButton extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="basicButtonContainer basicButtonContainerDesktop">
          <div className="basicButton basicButtonDesktop">
            <div className="basicButtonText basicButtonTextDesktop">
              {this.props.text}
            </div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="basicButtonContainer basicButtonContainerMobile">
          <div className="basicButton basicButtonMobile">
            <div className="basicButtonText basicButtonTextMobile">
              {this.props.text}
            </div>
          </div>
        </div>
      );
    }
  }
}
