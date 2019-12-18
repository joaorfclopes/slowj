import React from "react";
import Navbar from "../components/general/Navbar";
import Section1 from "../components/bio/Section1";
import Footer from "../components/general/Footer";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="bio view">
        <Navbar
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          home={false}
          bio={true}
          media={false}
        />
        <Section1 />
        <Footer />
      </div>
    );
  }
}
