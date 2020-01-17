import React from "react";

export default class Video extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <iframe
          className="mediaItemPageVideo mediaItemPageVideoDesktop"
          title="content"
          src={this.props.content}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <iframe
          className="mediaItemPageVideo mediaItemPageVideoMobile"
          title="content"
          src={this.props.content}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
  }
}
