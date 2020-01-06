import React from "react";
import Navbar from "../components/general/Navbar";
import Section1 from "../components/media/Section1";
import Footer from "../components/general/Footer";

export default class Media extends React.Component {
  render() {
    return (
      <div className="media view">
        <Navbar
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          home={false}
          bio={false}
          media={true}
        />
        <div className="pushLeft">
          <Section1
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
          />
          <Footer
            isDesktop={this.props.isDesktop}
            isMobile={this.props.isMobile}
          />
        </div>
      </div>
    );
  }
}
