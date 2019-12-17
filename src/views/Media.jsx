import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Media extends React.Component {
  render() {
    return (
      <div className="media view">
        <Navbar />
        <h1>Media</h1>
        <Footer />
      </div>
    );
  }
}
