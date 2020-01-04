import React from "react";
import Title from "../sections/Title";
import Cover from "../sections/Cover";
import ListenButtonsSection from "../sections/ListenButtonsSection";
import taosdTitle from "../../assets/images/TAOSD-title.png";
import taosdCover from "../../assets/images/TAOSD-cover.jpg";

export default class Section2 extends React.Component {
  render() {
    return (
      <div className="homeSection2">
        <div className="homeSectionContent">
          <Title
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
            title={taosdTitle}
          />
          <Cover
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
            cover={taosdCover}
          />
          <ListenButtonsSection
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
            redirectSpotify="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
            redirectAppleMusic="https://music.apple.com/pt/album/the-art-of-slowing-down/1215336873?app=music&ign-mpt=uo%3D4"
            redirectGooglePlay="https://play.google.com/store/music/album/Slow_J_The_Art_of_Slowing_Down?id=Bs3pnuccst6hzqwg2ccpenivbl4&hl=en"
          />
        </div>
      </div>
    );
  }
}
