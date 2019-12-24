import React from "react";

export default class Title extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="title titleDesktop">
          <img
            className="titleImage titleImageDesktop"
            src={this.props.title}
            alt="title"
          />
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="title titleMobile">
          <img
            className="titleImage titleImageMobile"
            src={this.props.title}
            alt="title"
          />
        </div>
      );
    }
  }
}
