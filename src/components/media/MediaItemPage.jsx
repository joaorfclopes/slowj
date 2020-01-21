import React from "react";
import Video from "./Video";
import Critic from "./Critic";

export default class MediaItemPage extends React.Component {
  render() {
    let content;
    if (this.props.video === "true") {
      content = (
        <Video
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          content={this.props.content}
        />
      );
    } else {
      content = (
        <Critic
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          content={this.props.content}
          image={this.props.image}
        />
      );
    }
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPage mediaItemPageDesktop">
          <div className="mediaTitle mediaTitleDesktop">{this.props.title}</div>
          <div className="mediaSeparator mediaSeparatorDesktop"></div>
          <div className="mediaItemSubtitleContainer mediaItemSubtitleContainerDesktop">
            <a
              className="mediaItemSubtitle mediaItemSubtitleDesktop"
              href="/media"
            >
              {`< Back`}
            </a>
          </div>
          <div className="mediaItemPageContent mediaItemPageContentDesktop">
            {content}
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPage mediaItemPageMobile">
          <div className="mediaTitle mediaTitleMobile">{this.props.title}</div>
          <div className="mediaSeparator mediaSeparatorMobile"></div>
          <div className="mediaItemSubtitleContainer mediaItemSubtitleContainerMobile">
            <a
              className="mediaItemSubtitle mediaItemSubtitleMobile"
              href="/media"
            >
              {`< Back`}
            </a>
          </div>
          <div className="mediaItemPageContent mediaItemPageContentMobile">
            {content}
          </div>
        </div>
      );
    }
  }
}
