import React from "react";
import Main from "./views/Main";

let body = document.getElementsByTagName("body")[0];

export default class App extends React.Component {
  load() {
    body.style.overflow = "hidden";
    this.props.showLoader();
  }

  componentWillMount() {
    if (window.location.href.indexOf("media/") > -1) {
      body.style.overflow = "visible";
      this.props.hideLoader();
      return;
    }
    this.load();
  }

  renderApp() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          body.style.overflow = "visible";
          this.props.hideLoader();
        }, 1500);
      }
    };
  }

  componentDidMount() {
    if (window.location.href.indexOf("media/") > -1) {
      body.style.overflow = "visible";
      this.props.hideLoader();
      return;
    }
    this.renderApp();
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
