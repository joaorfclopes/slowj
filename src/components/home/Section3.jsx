import React from "react";
import Title from "../sections/Title";
import Cover from "../sections/Cover";
import ListenButtonsSection from "../sections/ListenButtonsSection";
import tfftTitle from "../../assets/images/TFFT-title.png";
import tfftCover from "../../assets/images/TFFT-cover.jpg";

export default class Section3 extends React.Component {
  render() {
    return (
      <div className="homeSection3">
        <Title
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          title={tfftTitle}
        />
        <Cover
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          cover={tfftCover}
        />
        <ListenButtonsSection
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          redirectSpotify="https://open.spotify.com/album/5gbJoxDBh8YGQZ4Pxpj1xC"
          redirectAppleMusic="https://music.apple.com/pt/album/the-free-food-tape/984016831?app=music&ign-mpt=uo%3D4"
          redirectGooglePlay="https://play.google.com/store/music/album?id=Bsmxctjsq32kubtpi7awnirpv4a"
        />
      </div>
    );
  }
}
