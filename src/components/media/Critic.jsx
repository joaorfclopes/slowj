import React from "react";

export default class Critic extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticDesktop"></div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticMobile"></div>
      );
    }
  }
}
