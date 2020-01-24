import React from "react";

export default class Critic extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticDesktop">
          <div className="mediaItemPageCriticImageContainer mediaItemPageCriticImageContainerDesktop">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <div
                className="mediaItemPageCriticImage mediaItemPageCriticImageDesktop"
                style={{ backgroundImage: `url(${this.props.image})` }}
              ></div>
            </a>
          </div>
          <div className="mediaItemPageCriticText mediaItemPageCriticTextDesktop">
            <div className="mediaItemPageCriticTitle mediaItemPageCriticTitleDesktop">
              {this.props.title}
            </div>
            <div className="mediaItemPageCriticDesc mediaItemPageCriticDescDesktop">
              {this.props.paragraph}
              <a
                className="lerMais"
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See More...
              </a>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticMobile">
          <div className="mediaItemPageCriticImageContainer mediaItemPageCriticImageContainerMobile">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <div
                className="mediaItemPageCriticImage mediaItemPageCriticImageMobile"
                style={{ backgroundImage: `url(${this.props.image})` }}
              ></div>
            </a>
          </div>
          <div className="mediaItemPageCriticText mediaItemPageCriticTextMobile">
            <div className="mediaItemPageCriticTitle mediaItemPageCriticTitleMobile">
              {this.props.title}
            </div>
            <div className="mediaItemPageCriticDesc mediaItemPageCriticDescMobile">
              {this.props.paragraph}
              <a
                className="lerMais"
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                See More...
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}
