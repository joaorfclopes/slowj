import React from "react";
import MediaSection from "./MediaSection";
import MediaItemPage from "./MediaItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import yafpublico from "../../assets/images/yafpublico.jpg";
import yafcca from "../../assets/images/yafcca.jpg";
import yafreb from "../../assets/images/yafreb.jpg";
import rimasebatidas from "../../assets/images/rimasebatidas.jpg";
import taosdreb from "../../assets/images/taosdreb.jpg";
import publico from "../../assets/images/publico.jpg";
import mdemusica from "../../assets/images/mdemusica.jpg";
import tfftreb from "../../assets/images/tfftreb.jpg";

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      content: "Link",
      video: "true",
      image: ""
    };
  }

  checkUrl() {
    if (window.location.href.indexOf("lagrimas-video") > -1) {
      this.setState({
        title: "Lágrimas (Part 2)",
        content: "https://www.youtube.com/embed/7BYFJL81Dz4",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("publico-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "Público - You Are Forgiven",
        content:
          "https://www.publico.pt/2019/12/13/culturaipsilon/entrevista/-slow-j-you-are-forgiven-significa-ja-nasceste-perdao-ideia-liberdade-1896669",
        video: "false",
        image: yafpublico
      });
    } else if (
      window.location.href.indexOf("cca-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "CCA - You Are Forgiven",
        content:
          "https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/",
        video: "false",
        image: yafcca
      });
    } else if (window.location.href.indexOf("tambem-sonhar-video") > -1) {
      this.setState({
        title: "Também Sonhar (Part 1)",
        content: "https://www.youtube.com/embed/56-ye8jX4h0",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("r&b-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "R&B - You Are Forgiven",
        content: "https://www.rimasebatidas.pt/slow-j-you-are-forgiven/",
        video: "false",
        image: yafreb
      });
    } else if (window.location.href.indexOf("r&b-entrevista") > -1) {
      this.setState({
        title: "Rimas e Batidas",
        content: "https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/",
        video: "false",
        image: rimasebatidas
      });
    } else if (window.location.href.indexOf("nunca-pares-video") > -1) {
      this.setState({
        title: "Nunca Pares",
        content: "https://www.youtube.com/embed/tHJNEAsLCCo",
        video: "true"
      });
    } else if (window.location.href.indexOf("mega-hits-video") > -1) {
      this.setState({
        title: "Mega Hits",
        content: "https://www.youtube.com/embed/sXlD6Wcpy6c",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("r&b-the-art-of-slowing-down-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Art Of Slowing Down",
        content: "https://www.rimasebatidas.pt/slow-j-the-art-of-slowing-down/",
        video: "false",
        image: taosdreb
      });
    } else if (window.location.href.indexOf("publico-entrevista") > -1) {
      this.setState({
        title: "Público",
        content:
          "https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940",
        video: "false",
        image: publico
      });
    } else if (window.location.href.indexOf("arte-video") > -1) {
      this.setState({
        title: "Arte (Meet Speedy)",
        content: "https://www.youtube.com/embed/rzPGBIPWuHE",
        video: "true"
      });
    } else if (window.location.href.indexOf("antena-3-video") > -1) {
      this.setState({
        title: "Antena 3",
        content: "https://www.youtube.com/embed/o7u8aX8dUPE",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("m-de-musica-entrevista-video") > -1
    ) {
      this.setState({
        title: "M de Musica",
        content:
          "http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/",
        video: "false",
        image: mdemusica
      });
    } else if (window.location.href.indexOf("vida-boa-video") > -1) {
      this.setState({
        title: "Vida Boa",
        content: "https://www.youtube.com/embed/1rETsKuw2Hk",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("o-cliente-sofar-lisbon-video") > -1
    ) {
      this.setState({
        title: "O Cliente @Sofar Lisbon",
        content: "https://www.youtube.com/embed/flILuwfNWbM",
        video: "true"
      });
    } else if (window.location.href.indexOf("comida-video") > -1) {
      this.setState({
        title: "Comida",
        content: "https://www.youtube.com/embed/5R8SIoaIwE0",
        video: "true"
      });
    } else if (window.location.href.indexOf("cristalina-video") > -1) {
      this.setState({
        title: "Cristalina",
        content: "https://www.youtube.com/embed/Y5PINCsl9RQ",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("bp-slowj-surge-skate-entrevista-video") > -1
    ) {
      this.setState({
        title: "BP vs Slow J [RVCA | Surge Skate]",
        content: "https://www.youtube.com/embed/SQJfxC6n6KY",
        video: "true"
      });
    } else if (window.location.href.indexOf("tinta-da-raiz-video") > -1) {
      this.setState({
        title: "Tinta da Raiz",
        content: "https://www.youtube.com/embed/_SphtRjwOSk",
        video: "true"
      });
    } else if (
      window.location.href.indexOf(
        "the-free-food-tape-listening-party-entrevista-video"
      ) > -1
    ) {
      this.setState({
        title: "The Free Food Tape - Listening Party",
        content: "https://www.youtube.com/embed/bAFJhH9l8IQ",
        video: "true"
      });
    } else if (
      window.location.href.indexOf("the-free-food-tape-critica") > -1
    ) {
      this.setState({
        title: "R&B - The Free Food Tape",
        content: "https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/",
        video: "false",
        image: tfftreb
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
                content={this.state.content}
                video={this.state.video}
                image={this.state.image}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
