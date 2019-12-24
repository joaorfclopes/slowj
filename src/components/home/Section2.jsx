import React from "react";
import ListenButtonsSection from "../buttons/ListenButtonsSection";
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
          <ListenButtonsSection
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
            redirectSpotify="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
            redirectAppleMusic="https://music.apple.com/pt/album/the-art-of-slowing-down/1215336873?app=music&ign-mpt=uo%3D4"
            redirectGooglePlay="https://play.google.com/store/music/album/Slow_J_The_Art_of_Slowing_Down?id=Bs3pnuccst6hzqwg2ccpenivbl4&hl=en"
          />
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
          <ListenButtonsSection
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
            redirectSpotify="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
            redirectAppleMusic="https://music.apple.com/pt/album/the-art-of-slowing-down/1215336873?app=music&ign-mpt=uo%3D4"
            redirectGooglePlay="https://play.google.com/store/music/album/Slow_J_The_Art_of_Slowing_Down?id=Bs3pnuccst6hzqwg2ccpenivbl4&hl=en"
          />
        </div>
      );
    }
  }
}
