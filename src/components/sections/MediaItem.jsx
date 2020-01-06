import React from "react";

export default class MediaItem extends React.Component {
  render() {
    return (
      <div className="mediaItem">
        <div className="mediaItemImage" style={{ backgroundImage: `url(${this.props.image})` }}></div>
      </div>
    );
  }
}
