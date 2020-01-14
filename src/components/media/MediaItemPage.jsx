import React from "react";

export default class MediaItemPage extends React.Component {
  goBack() {
    window.history.back();
  }
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPage mediaItemPageDesktop">
          <div className="mediaTitle mediaTitleDesktop">{this.props.title}</div>
          <div className="mediaSeparator mediaSeparatorDesktop"></div>
          <div className="mediaItemSubtitleContainer mediaItemSubtitleContainerDesktop">
            <div
              className="mediaItemSubtitle mediaItemSubtitleDesktop"
              onClick={this.goBack}
            >
              {`< Back`}
            </div>
          </div>
          <div className="mediaItemPageVideoContainer mediaItemPageVideoContainerDesktop">
            <iframe
              className="mediaItemPageVideo mediaItemPageVideoDesktop"
              title="content"
              src={this.props.iframe}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="arrows"></div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPage mediaItemPageMobile">
          <div className="mediaTitle mediaTitleMobile">{this.props.title}</div>
          <div className="mediaSeparator mediaSeparatorMobile"></div>
          <div className="mediaItemSubtitleContainer mediaItemSubtitleContainerMobile">
            <div
              className="mediaItemSubtitle mediaItemSubtitleMobile"
              onClick={this.goBack}
            >
              {`< Back`}
            </div>
          </div>
          <div className="mediaItemPageVideoContainer mediaItemPageVideoContainerMobile">
            <iframe
              className="mediaItemPageVideo mediaItemPageVideoMobile"
              title="content"
              src={this.props.iframe}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="arrows"></div>
        </div>
      );
    }
  }
}
