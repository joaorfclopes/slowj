import React from "react";
import MediaSection from "./MediaSection";
import MediaItemPage from "./MediaItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      title: "",
      content: "",
      video: "true",
      image: "",
      paragraph: ""
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
      window.location.href.indexOf("cca-you-are-forgiven-critica") > -1
    ) {
      this.setState({
        title: "CCA - You Are Forgiven",
        content:
          "https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/",
        video: "false",
        image: yafcca,
        paragraph:
          "Seja qual for a gaveta em que queiram meter a música multicêntrica de Slow J, certamente que a tentativa será infrutuosa. É impossível categorizar a expressão musical do artista nascido João Batista Coelho. No entanto, há algo que une os temas multifacetados deste músico: a tremenda empatia e sentimento que transmitem, despoletados pela voz de Coelho. A divinal dúvida e interessante incerteza evapora-se quando a ouvimos, é o seu melhor instrumento, e através do mesmo o músico consegue transmitir eficazmente uma miríade de emoções que transparecem fielmente, tornando claro para o ouvinte o que o artista sente tão intensamente. "
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
        image: yafreb,
        paragraph:
          "Um novo álbum de Slow J. E nem parece que passaram dois anos e meio sobre a edição de The Art of Slowing Down… Desde então, o “puto lento” escalou montanhas, tornou-se referência maior, subiu aos palcos principais e posicionou-se por indiscutível mérito na mais avançada linha da nova música portuguesa, deixando claro que é artista inteiro — ele que escreve e compõe, que produz, rima e canta, toca e dá sempre tudo, da pele às entranhas. Slow, sem a menor sombra de dúvidas, sente isto como poucos. Talvez seja até mesmo mais justo escrever que ele sente isto como ninguém. E, apesar de tudo — ou apesar de tanto… — como evitar ser novamente esmagado por um conjunto de canções com a marca Slow J? É verdade que surgiram assim, sem aviso, mesmo se “Teu Eternamente” já apontasse para aqui, mas ainda que se saiba deste lado da elevadíssima fasquia que João Coelho ergueu, isso de nada serve para suavizar o impacto desta nova fornada. Slow J podia já estar na estratosfera, mas com You Are Forgiven sobe ainda mais alto. E vai ainda mais longe. O importante é que quer levar-nos com ele…"
      });
    } else if (window.location.href.indexOf("r&b-entrevista") > -1) {
      this.setState({
        title: "Rimas e Batidas",
        content: "https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/",
        video: "false",
        image: rimasebatidas,
        paragraph:
          "Slow J afirmou-se, justamente, como uma das mais vigorosas vozes do presente, um expoente da sua geração e um caso sério de sucesso que tem vindo a escalar os degraus da exposição pública em palcos crescentemente maiores. E, curiosamente, quando se consultam os seus dois registos presentes no site discogs.com – The Free Food Tape e The Art of Slowing Down – ainda se percebe que estão ambos registados como “not on label”: ou seja, são edições de autor, à margem de uma indústria em que, ainda assim, a sua música tem deixado fortes impressões. Visto como uma certeza para o futuro, Slow J abre-se aqui numa conversa franca sobre a sua arte, os seus processos mentais, a sua relação com as palavras e com quem as ouve."
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
        image: taosdreb,
        paragraph:
          "É raro, quando se contempla uma pintura exposta num museu, que os nossos olhos se desviem das formas erguidas pelo pincel do artista, das cores e dos jogos de luz, das figuras concretas ou abstractas, e se detenham na moldura. As margens de madeira para os oceanos de imagem e textura que as molduras representam estão ali apenas para conterem a ideia, para a separarem da parede que a sustenta. São o fim ou o princípio do que importa. Não é suposto repararmos nelas. Mas as molduras são muitas vezes o arranque das ideias, o que as define, que as contém e por isso mesmo o que as segura em termos conceptuais."
      });
    } else if (window.location.href.indexOf("publico-entrevista") > -1) {
      this.setState({
        title: "Público",
        content:
          "https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940",
        video: "false",
        image: publico,
        paragraph:
          "O aguardadíssimo primeiro álbum do músico de Setúbal é uma obra pujante e indomesticável. Confirma-se um amor sem fronteiras, uma criação que vai beber a pontos tão próximos e distantes como o rock, o fado e o semba, o R&B ou a balada pop acústica."
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
        image: mdemusica,
        paragraph:
          "O M de Música já está no ar: veio do metal mas descobriu-se livre nos meandros do hip hop. Que lições aprendeu com Jamie Cullum? Porque é que andou a bater a todas as portas de uma só praceta em Lisboa? E qual será o centro de The Art of Slowing Down? As respostas de Slow J estão todas aqui."
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
        image: tfftreb,
        paragraph:
          "Num momento em que o sistema de ensino tantas vezes nos entra pelos olhos (i.e., pela televisão e computador) dentro, quase sempre, infelizmente, pelas piores razões, Slow J, rapper e produtor de Setúbal, é um daqueles exemplos do excelente aluno que sofre da “síndrome do primeiro período”. Explicando: The Free Food Tape, EP de sete faixas lançado há semanas, é uma obra magnífica do hip hop português que, qual cometa repentino, sai disparado, endiabrado, das mãos de um perfeito desconhecido do público português, como que se o criador não conseguisse domar (os efeitos d)a sua própria criatura. Dizemos “desconhecido” não só porque, como rapper, Slow J simplesmente “não existia”, mas também pelo facto de, mesmo como produtor, e salvo algum registo que nos possa estar a escapar, não nos recordarmos de nenhuma faixa produzida com o seu carimbo para outros artistas."
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
                paragraph={this.state.paragraph}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
