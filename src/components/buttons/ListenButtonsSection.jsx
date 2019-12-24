import React from "react";
import ListenButton from "./ListenButton";
import spotify from "../../assets/images/spotify.png";
import appleMusic from "../../assets/images/appleMusic.png";
import googlePlay from "../../assets/images/googlePlay.png";

export default class ListenButtonsSection extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="listen listenDesktop">
          <div id="listenButtons">
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectSpotify}
              image={spotify}
            />
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectAppleMusic}
              image={appleMusic}
            />
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectGooglePlay}
              image={googlePlay}
            />
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="listen listenMobile">
          <div id="listenButtons">
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectSpotify}
              image={spotify}
            />
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectAppleMusic}
              image={appleMusic}
            />
            <ListenButton
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              redirect={this.props.redirectGooglePlay}
              image={googlePlay}
            />
          </div>
        </div>
      );
    }
  }
}
