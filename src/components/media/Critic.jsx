import React from "react";

export default class Critic extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticDesktop">
          <div
            className="criticCover criticCoverDesktop"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="criticText criticTextDesktop"></div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticMobile">
          <div
            className="criticCover criticCoverMobile"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="criticText criticTextMobile"></div>
        </div>
      );
    }
  }
}
