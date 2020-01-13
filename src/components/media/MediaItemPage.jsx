import React from "react";
import arrowBack from "../../assets/svg/back.svg";

export default class MediaItemPage extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPage mediaItemPageDesktop">
          <div className="mediaTitle mediaTitleDesktop">{this.props.title}</div>
          <div className="mediaSeparator mediaSeparatorDesktop"></div>
          <div className="mediaItemSubtitleContainer mediaItemSubtitleContainerDesktop">
            <div className="mediaItemSubtitle mediaItemSubtitleDesktop">
              <a
                className="mediaItemSubtitleLink mediaItemSubtitleLinkDesktop"
                href="/media/"
              >
                <img
                  className="mediaItemSubtitleContent arrowBackDesktop"
                  src={arrowBack}
                  alt="Arrow Back"
                />
                <div className="mediaItemSubtitleContent">Back</div>
              </a>
            </div>
          </div>
          <div className="mediaItemPageVideoContainer mediaItemPageVideoContainerDesktop">
            <iframe
              className="mediaItemPageVideo mediaItemPageVideoDesktop"
              title="video"
              src="https://www.youtube.com/embed/7BYFJL81Dz4"
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
            <div className="mediaItemSubtitle mediaItemSubtitleMobile">
              <a
                className="mediaItemSubtitleLink mediaItemSubtitleLinkMobile"
                href="/media/"
              >
                <img
                  className="mediaItemSubtitleContent arrowBackMobile"
                  src={arrowBack}
                  alt="Arrow Back"
                />
                <div className="mediaItemSubtitleContent">Back</div>
              </a>
            </div>
          </div>
          <div className="mediaItemPageVideoContainer mediaItemPageVideoContainerMobile">
            <iframe
              className="mediaItemPageVideo mediaItemPageVideoMobile"
              title="video"
              src="https://www.youtube.com/embed/7BYFJL81Dz4"
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
