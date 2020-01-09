import React from "react";

export default class Cover extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="cover coverDesktop">
          <img
            className="coverImage coverImageDesktop"
            src={this.props.cover}
            alt="cover"
          />
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="cover coverMobile">
          <img
            className="coverImage coverImageMobile"
            src={this.props.cover}
            alt="cover"
          />
        </div>
      );
    }
  }
}
