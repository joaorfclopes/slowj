import React from "react";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import youtube from "../../assets/svg/youtube.svg";
import soundcloud from "../../assets/svg/soundcloud.svg";

export default class Footer extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="footer footerDesktop">
          <div className="social socialDesktop">
            <div className="socialLink socialLinkDesktop">
              <a
                href="https://www.facebook.com/SlowJOfficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="link" />
              </a>
            </div>
            <div className="socialLink socialLinkDesktop">
              <a
                href="https://twitter.com/Slow_J_Music"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="link" />
              </a>
            </div>
            <div className="socialLink socialLinkDesktop">
              <a
                href="https://www.instagram.com/slowj_oficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="link" />
              </a>
            </div>
            <div className="socialLink socialLinkDesktop">
              <a
                href="https://www.youtube.com/SlowJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="link" />
              </a>
            </div>
            <div className="socialLink socialLinkDesktop">
              <a
                href="https://soundcloud.com/slow-j-official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soundcloud} alt="link" />
              </a>
            </div>
          </div>
          <div className="creatorTag creatorTagDesktop">
            &#9400;{" "}
            <a
              className="joaolopes joaolopesDesktop"
              href="https://www.instagram.com/joao.lopes.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Joao Lopes</u>
            </a>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return <div></div>;
    }
  }
}
