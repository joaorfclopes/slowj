import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="bio view">
        <Navbar />
        <h1>Bio</h1>
        <Footer />
      </div>
    );
  }
}
