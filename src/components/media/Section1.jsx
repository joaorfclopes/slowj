import React from "react";
import MediaSection from "../sections/MediaSection";

export default class Section1 extends React.Component {
  render() {
    return (
      <div className="mediaSection1 mediaSection1Desktop">
        <MediaSection
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
        />
      </div>
    );
  }
}
