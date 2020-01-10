import React from "react";
import MediaSection from "./MediaSection";

export default class Section1 extends React.Component {
  render() {
    return (
      <div className="mediaSection1">
        <MediaSection
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
        />
      </div>
    );
  }
}
