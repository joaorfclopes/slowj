import React from "react";
import taosdTitle from "../../assets/images/TAOSD-title.png";

export default class Section2 extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="homeSection2">
          <div className="taosdTitle title">
            <img
              className="taosdTitleImage taosdTitleImageDesktop"
              src={taosdTitle}
              alt="The Art Of Slowing Down"
            />
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="homeSection2">
          <div className="taosdTitle title">
            <img
              className="taosdTitleImage taosdTitleImageMobile"
              src={taosdTitle}
              alt="The Art Of Slowing Down"
            />
          </div>
        </div>
      );
    }
  }
}
