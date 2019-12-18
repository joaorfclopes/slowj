import React from "react";

export default class Button1 extends React.Component {
  render() {
    return (
      <div className="button1Container">
        <div className="button1">
          <div className="button1Text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
