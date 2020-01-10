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
    } else if (
      window.location.href.indexOf("publico-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "Público - You Are Forgiven",
        subtitle: "Crítica"
      });
    } else if (
      window.location.href.indexOf("cca-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "CCA - You Are Forgiven",
        subtitle: "Crítica"
      });
    } else if (window.location.href.indexOf("tambem-sonhar-video") > -1) {
      this.setState({
        title: "Também Sonhar (Part 1)",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf("r&b-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "R&B - You Are Forgiven",
        subtitle: "Crítica"
      });
    } else if (window.location.href.indexOf("r&b-entrevista") > -1) {
      this.setState({
        title: "Rimas e Batidas",
        subtitle: "Entrevista"
      });
    } else if (window.location.href.indexOf("nunca-pares-video") > -1) {
      this.setState({
        title: "Nunca Pares",
        subtitle: "Vídeo"
      });
    } else if (window.location.href.indexOf("mega-hits-video") > -1) {
      this.setState({
        title: "Mega Hits",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf("r&b-the-art-of-slowing-down-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Art Of Slowing Down",
        subtitle: "Crítica"
      });
    } else if (window.location.href.indexOf("publico-entrevista") > -1) {
      this.setState({
        title: "Público",
        subtitle: "Entrevista"
      });
    } else if (window.location.href.indexOf("arte-video") > -1) {
      this.setState({
        title: "Arte (Meet Speedy)",
        subtitle: "Vídeo"
      });
    } else if (window.location.href.indexOf("antena-3-video") > -1) {
      this.setState({
        title: "Antena 3",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf("m-de-musica-entrevista-video") > -1
    ) {
      this.setState({
        title: "M de Musica",
        subtitle: "Entrevista, Vídeo"
      });
    } else if (window.location.href.indexOf("vida-boa-video") > -1) {
      this.setState({
        title: "Vida Boa",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf("o-cliente-sofar-lisbon-video") > -1
    ) {
      this.setState({
        title: "O Cliente @Sofar Lisbon",
        subtitle: "Vídeo"
      });
    } else if (window.location.href.indexOf("comida-video") > -1) {
      this.setState({
        title: "Comida",
        subtitle: "Vídeo"
      });
    } else if (window.location.href.indexOf("cristalina-video") > -1) {
      this.setState({
        title: "Cristalina",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf("bp-slowj-surge-skate-entrevista-video") > -1
    ) {
      this.setState({
        title: "BP vs Slow J [RVCA | Surge Skate]",
        subtitle: "Entrevista, Vídeo"
      });
    } else if (window.location.href.indexOf("tinta-da-raiz-video") > -1) {
      this.setState({
        title: "Tinta da Raiz",
        subtitle: "Vídeo"
      });
    } else if (
      window.location.href.indexOf(
        "the-free-food-tape-listening-party-entrevista-video"
      ) > -1
    ) {
      this.setState({
        title: "The Free Food Tape - Listening Party",
        subtitle: "Entrevista, Vídeo"
      });
    } else if (
      window.location.href.indexOf("the-free-food-tape-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Free Food Tape",
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
