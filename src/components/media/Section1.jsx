import React from "react";
import MediaSection from "./MediaSection";
import MediaItemPage from "./MediaItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      subtitle: "Subtitle"
    };
  }
  checkUrl() {
    if (window.location.href.indexOf("lagrimas-video") > -1) {
      this.setState({
        title: "Lágrimas (Part 2)",
        subtitle: "Vídeo"
      });
    } else if (window.location.href.indexOf("publico-you-are-forgiven-critica") > -1) {
      this.setState({
        title: "Público - You Are Forgiven",
        subtitle: "Crítica"
      });
    }
  }
  componentDidMount() {
    this.checkUrl();
  }
  render() {
    return (
      <div className="mediaSection1">
        <Router>
          <Switch>
            <Route exact path="/media">
              <MediaSection
                isDesktop={this.props.isDesktop}
                isMobile={this.props.isMobile}
                onClick={this.checkUrl}
              />
            </Route>
            <Route path="/media/">
              <MediaItemPage
                isDesktop={this.props.isDesktop}
                isMobile={this.props.isMobile}
                title={this.state.title}
                subtitle={this.state.subtitle}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
