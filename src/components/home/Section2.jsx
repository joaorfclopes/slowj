import React from "react";
import taosdTitle from "../../assets/images/TAOSD-title.png";
import taosdCover from "../../assets/images/TAOSD-cover.jpg";

export default class Section2 extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="homeSection2">
          <div className="taosdTitle taosdTitleDesktop title titleDesktop">
            <img
              className="taosdTitleImage taosdTitleImageDesktop"
              src={taosdTitle}
              alt="The Art Of Slowing Down"
            />
          </div>
          <div className="taosdCover taosdCoverDesktop cover coverDesktop">
            <img
              className="taosdCoverImage taosdCoverImageDesktop"
              src={taosdCover}
              alt="The Art Of Slowing Down"
            />
          </div>
          <div className="taosdListen taosdListenDesktop listen listenDesktop">
            <div className="taosdListenImages taosdListenImagesDesktop"></div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="homeSection2">
          <div className="taosdTitle taosdTitleMobile title titleMobile">
            <img
              className="taosdTitleImage taosdTitleImageMobile"
              src={taosdTitle}
              alt="The Art Of Slowing Down"
            />
          </div>
          <div className="taosdCover taosdCoverMobile cover coverMobile">
            <img
              className="taosdCoverImage taosdCoverImageMobile"
              src={taosdCover}
              alt="The Art Of Slowing Down"
            />
          </div>
          <div className="taosdListen taosdListenMobile listen listenMobile">
            <div className="taosdListenImages taosdListenImagesMobile"></div>
          </div>
        </div>
      );
    }
  }
}
