import React from "react";

export default class MediaItem extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className={`mediaItem mediaItemDesktop ${this.props.class}`}>
          <a
            className="mediaItemLink"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mediaItemDescription mediaItemDescriptionDesktop">
              {this.props.description}
            </div>
            <div className="mediaItemSub mediaItemSubDesktop">
              {this.props.class}
            </div>
            <div
              className="mediaItemImage mediaItemImageDesktop"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
          </a>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className={`mediaItem mediaItemMobile ${this.props.class}`}>
          <a
            className="mediaItemLink"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mediaItemDescription mediaItemDescriptionMobile">
              {this.props.description}
            </div>
            <div
              className="mediaItemImage mediaItemImageMobile"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
          </a>
        </div>
      );
    }
  }
}
