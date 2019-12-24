import React from "react";

export default class ListenButton extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="listenButtonBox listenButtonBoxDesktop">
          <a
            href={this.props.redirect}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="listenButton listenButtonDesktop"
              src={this.props.image}
              alt="img"
            />
          </a>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="listenButtonBox listenButtonBoxMobile">
          <a
            href={this.props.redirect}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="listenButton listenButtonMobile"
              src={this.props.image}
              alt="img"
            />
          </a>
        </div>
      );
    }
  }
}
