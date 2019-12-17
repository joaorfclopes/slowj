import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home view">
        <Navbar
          isDesktop={this.props.isDesktop}
          isMobile={this.props.isMobile}
          home={true}
          bio={false}
          media={false}
        />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    );
  }
}
