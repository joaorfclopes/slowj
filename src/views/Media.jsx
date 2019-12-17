import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/media/Section1";
import Footer from "../components/Footer";

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
        <Section1 />
        <Footer />
      </div>
    );
  }
}
