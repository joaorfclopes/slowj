import React from "react";
import taosdTitle from "../../assets/images/TAOSD-title.png";
import taosdCover from "../../assets/images/TAOSD-cover.jpg";
import spotify from "../../assets/images/spotify.png";
import appleMusic from "../../assets/images/appleMusic.png";
import googlePlay from "../../assets/images/googlePlay.png";

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
            <div id="taosdListenButtons">
              <div className="taosdListenButtonBox taosdListenButtonBoxDesktop">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonDesktop"
                    src={spotify}
                    alt="Spotify"
                  />
                </a>
              </div>
              <div className="taosdListenButtonBox taosdListenButtonBoxDesktop">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonDesktop"
                    src={appleMusic}
                    alt="Apple Music"
                  />
                </a>
              </div>
              <div className="taosdListenButtonBox taosdListenButtonBoxDesktop">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonDesktop"
                    src={googlePlay}
                    alt="Google Play"
                  />
                </a>
              </div>
            </div>
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
            <div id="taosdListenButtons">
              <div className="taosdListenButtonBox taosdListenButtonBoxMobile">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonMobile"
                    src={spotify}
                    alt="Spotify"
                  />
                </a>
              </div>
              <div className="taosdListenButtonBox taosdListenButtonBoxMobile">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonMobile"
                    src={appleMusic}
                    alt="Apple Music"
                  />
                </a>
              </div>
              <div className="taosdListenButtonBox taosdListenButtonBoxMobile">
                <a
                  href="https://open.spotify.com/album/7nmtqSWbVJBxRbpAZT8I6r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="taosdListenButton taosdListenButtonMobile"
                    src={googlePlay}
                    alt="Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
