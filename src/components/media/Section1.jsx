import React from "react";
import MediaSection from "./MediaSection";
import MediaItemPage from "./MediaItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      iframe: "Link"
    };
  }

  checkUrl() {
    if (window.location.href.indexOf("lagrimas-video") > -1) {
      this.setState({
        title: "Lágrimas (Part 2)",
        iframe: "https://www.youtube.com/embed/7BYFJL81Dz4"
      });
    } else if (
      window.location.href.indexOf("publico-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "Público - You Are Forgiven",
        iframe:
          "https://www.publico.pt/2019/12/13/culturaipsilon/entrevista/-slow-j-you-are-forgiven-significa-ja-nasceste-perdao-ideia-liberdade-1896669"
      });
    } else if (
      window.location.href.indexOf("cca-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "CCA - You Are Forgiven",
        iframe:
          "https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/"
      });
    } else if (window.location.href.indexOf("tambem-sonhar-video") > -1) {
      this.setState({
        title: "Também Sonhar (Part 1)",
        iframe: "https://www.youtube.com/embed/56-ye8jX4h0"
      });
    } else if (
      window.location.href.indexOf("r&b-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "R&B - You Are Forgiven",
        iframe: "https://www.rimasebatidas.pt/slow-j-you-are-forgiven/"
      });
    } else if (window.location.href.indexOf("r&b-entrevista") > -1) {
      this.setState({
        title: "Rimas e Batidas",
        iframe: "https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/"
      });
    } else if (window.location.href.indexOf("nunca-pares-video") > -1) {
      this.setState({
        title: "Nunca Pares",
        iframe: "https://www.youtube.com/embed/tHJNEAsLCCo"
      });
    } else if (window.location.href.indexOf("mega-hits-video") > -1) {
      this.setState({
        title: "Mega Hits",
        iframe: "https://www.youtube.com/embed/sXlD6Wcpy6c"
      });
    } else if (
      window.location.href.indexOf("r&b-the-art-of-slowing-down-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Art Of Slowing Down",
        iframe: "https://www.rimasebatidas.pt/slow-j-the-art-of-slowing-down/"
      });
    } else if (window.location.href.indexOf("publico-entrevista") > -1) {
      this.setState({
        title: "Público",
        iframe: "https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940"
      });
    } else if (window.location.href.indexOf("arte-video") > -1) {
      this.setState({
        title: "Arte (Meet Speedy)",
        iframe: "https://www.youtube.com/embed/rzPGBIPWuHE"
      });
    } else if (window.location.href.indexOf("antena-3-video") > -1) {
      this.setState({
        title: "Antena 3",
        iframe: "https://www.youtube.com/embed/o7u8aX8dUPE"
      });
    } else if (
      window.location.href.indexOf("m-de-musica-entrevista-video") > -1
    ) {
      this.setState({
        title: "M de Musica",
        iframe: "http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
      });
    } else if (window.location.href.indexOf("vida-boa-video") > -1) {
      this.setState({
        title: "Vida Boa",
        iframe: "https://www.youtube.com/embed/1rETsKuw2Hk"
      });
    } else if (
      window.location.href.indexOf("o-cliente-sofar-lisbon-video") > -1
    ) {
      this.setState({
        title: "O Cliente @Sofar Lisbon",
        iframe: "https://www.youtube.com/embed/flILuwfNWbM"
      });
    } else if (window.location.href.indexOf("comida-video") > -1) {
      this.setState({
        title: "Comida",
        iframe: "https://www.youtube.com/embed/5R8SIoaIwE0"
      });
    } else if (window.location.href.indexOf("cristalina-video") > -1) {
      this.setState({
        title: "Cristalina",
        iframe: "https://www.youtube.com/embed/Y5PINCsl9RQ"
      });
    } else if (
      window.location.href.indexOf("bp-slowj-surge-skate-entrevista-video") > -1
    ) {
      this.setState({
        title: "BP vs Slow J [RVCA | Surge Skate]",
        iframe: "https://www.youtube.com/embed/SQJfxC6n6KY"
      });
    } else if (window.location.href.indexOf("tinta-da-raiz-video") > -1) {
      this.setState({
        title: "Tinta da Raiz",
        iframe: "https://www.youtube.com/embed/_SphtRjwOSk"
      });
    } else if (
      window.location.href.indexOf(
        "the-free-food-tape-listening-party-entrevista-video"
      ) > -1
    ) {
      this.setState({
        title: "The Free Food Tape - Listening Party",
        iframe: "https://www.youtube.com/embed/bAFJhH9l8IQ"
      });
    } else if (
      window.location.href.indexOf("the-free-food-tape-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Free Food Tape",
        iframe: "https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
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
                iframe={this.state.iframe}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
