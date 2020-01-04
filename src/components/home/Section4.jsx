import React from "react";
import Title from "../sections/Title";
import Cover from "../sections/Cover";
import ListenButtonsSection from "../sections/ListenButtonsSection";
import yafTitle from "../../assets/images/YAF-title.png";
import yafCover from "../../assets/images/YAF-cover.jpg";

export default class Section4 extends React.Component {
  render() {
    return (
      <div className="homeSection4">
        <Title
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          title={yafTitle}
        />
        <Cover
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          cover={yafCover}
        />
        <ListenButtonsSection
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          redirectSpotify="https://open.spotify.com/album/4aYjRWiuEU8gGeIs3FeAWJ"
          redirectAppleMusic="https://music.apple.com/pt/album/you-are-forgiven/1480261274"
          redirectGooglePlay="https://play.google.com/store/music/album/Slow_J_You_Are_Forgiven?id=Boxw66flbjz3rs43jnsssq45drq"
        />
      </div>
    );
  }
}
