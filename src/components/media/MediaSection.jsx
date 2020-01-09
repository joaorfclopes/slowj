import React from "react";
import MediaItem from "./MediaItem";
import lagrimas from "../../assets/images/lagrimas.jpg";
import yafpublico from "../../assets/images/yafpublico.jpg";
import yafcca from "../../assets/images/yafcca.jpg";
import tambemsonhar from "../../assets/images/tambemsonhar.jpg";
import yafreb from "../../assets/images/yafreb.jpg";
import rimasebatidas from "../../assets/images/rimasebatidas.jpg";
import nuncapares from "../../assets/images/nuncapares.jpg";
import megahits from "../../assets/images/megahits.jpg";
import taosdreb from "../../assets/images/taosdreb.jpg";
import publico from "../../assets/images/publico.jpg";
import arte from "../../assets/images/arte.jpg";
import antena3 from "../../assets/images/antena3.jpg";
import mdemusica from "../../assets/images/mdemusica.jpg";
import vidaboa from "../../assets/images/vidaboa.jpg";
import sofarlisbon from "../../assets/images/sofarlisbon.jpg";
import comida from "../../assets/images/comida.jpg";
import cristalina from "../../assets/images/cristalina.jpg";
import bpslowj from "../../assets/images/bpslowj.jpg";
import tintadaraiz from "../../assets/images/tintadaraiz.jpg";
import listeningparty from "../../assets/images/listeningparty.jpg";
import tfftreb from "../../assets/images/tfftreb.jpg";
import Isotope from "isotope-layout";
import $ from "jquery";

export default class MediaSection extends React.Component {
  componentDidMount() {
    const iso = new Isotope(".mediaItemsContainer", {
      itemSelector: ".mediaItem",
      layoutMode: "fitRows"
    });

    const filtersElem = document.querySelector(".mediaFilterButtons");
    filtersElem.addEventListener("click", function(event) {
      let filterValue = event.target.getAttribute("data-filter");
      if (filterValue === null) {
        return;
      }
      iso.arrange({ filter: filterValue });
    });
  }
  showAll() {
    $(".showAll").addClass("is-checked");
    $(".videos").removeClass("is-checked");
    $(".entrevistas").removeClass("is-checked");
    $(".criticas").removeClass("is-checked");
  }
  showVideos() {
    $(".showAll").removeClass("is-checked");
    $(".videos").addClass("is-checked");
    $(".entrevistas").removeClass("is-checked");
    $(".criticas").removeClass("is-checked");
  }
  showEntrevistas() {
    $(".showAll").removeClass("is-checked");
    $(".videos").removeClass("is-checked");
    $(".entrevistas").addClass("is-checked");
    $(".criticas").removeClass("is-checked");
  }
  showCriticas() {
    $(".showAll").removeClass("is-checked");
    $(".videos").removeClass("is-checked");
    $(".entrevistas").removeClass("is-checked");
    $(".criticas").addClass("is-checked");
  }
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaContainer mediaContainerDesktop">
          <div className="mediaTitle mediaTitleDesktop">Media</div>
          <div className="mediaSeparator mediaSeparatorDesktop"></div>
          <div className="mediaFilterButtons mediaFilterButtonsDesktop">
            <div
              className="filterButton filterButtonDesktop showAll is-checked"
              data-filter="*"
              onClick={this.showAll}
            >
              Show All
            </div>
            <div
              className="filterButton filterButtonDesktop videos"
              data-filter=".video"
              onClick={this.showVideos}
            >
              Vídeos
            </div>
            <div
              className="filterButton filterButtonDesktop entrevistas"
              data-filter=".entrevista"
              onClick={this.showEntrevistas}
            >
              Entrevistas
            </div>
            <div
              className="filterButton filterButtonDesktop criticas"
              data-filter=".critica"
              onClick={this.showCriticas}
            >
              Críticas
            </div>
          </div>
          <div className="mediaItemsContainer mediaItemsContainerDesktop">
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/lagrimas-video"
              itemClass="video"
              image={lagrimas}
              title="Lágrimas (Part 2)"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/publico-you-are-forgiven-critica"
              itemClass="critica"
              image={yafpublico}
              title="Público - You Are Forgiven"
              subtitle="Crítica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/cca-you-are-forgiven-critica"
              itemClass="critica"
              image={yafcca}
              title="CCA - You Are Forgiven"
              subtitle="Crítica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/tambem-sonhar-video"
              itemClass="video"
              image={tambemsonhar}
              title="Também Sonhar (Part 1)"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/r&b-you-are-forgiven-critica"
              itemClass="critica"
              image={yafreb}
              title="R&B - You Are Forgiven"
              subtitle="Crítica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/r&b-entrevista"
              itemClass="entrevista"
              image={rimasebatidas}
              title="Rimas e Batidas"
              subtitle="Entrevista"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/nunca-pares-video"
              itemClass="video"
              image={nuncapares}
              title="Nunca Pares"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/mega-hits-video"
              itemClass="video"
              image={megahits}
              title="Mega Hits"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/r&b-the-art-of-slowing-down-critica"
              itemClass="critica"
              image={taosdreb}
              title="R&B - The Art Of Slowing Down"
              subtitle="Crítica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/publico-entrevista"
              itemClass="entrevista"
              image={publico}
              title="Público"
              subtitle="Entrevista"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/arte-video"
              itemClass="video"
              image={arte}
              title="Arte (Meet Speedy)"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/antena-3-video"
              itemClass="video"
              image={antena3}
              title="Antena 3"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/m-de-musica-entrevista-video"
              itemClass="entrevista video"
              image={mdemusica}
              title="M de Musica"
              subtitle="Entrevista, Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/vida-boa-video"
              itemClass="video"
              image={vidaboa}
              title="Vida Boa"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/o-cliente-sofar-lisbon-video"
              itemClass="video"
              image={sofarlisbon}
              title="O Cliente @Sofar Lisbon"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/comida-video"
              itemClass="video"
              image={comida}
              title="Comida"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/cristalina-video"
              itemClass="video"
              image={cristalina}
              title="Cristalina"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/bp-slowj-surge-skate-entrevista-video"
              itemClass="entrevista video"
              image={bpslowj}
              title="BP vs Slow J [RVCA | Surge Skate]"
              subtitle="Entrevista, Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/tinta-da-raiz-video"
              itemClass="video"
              image={tintadaraiz}
              title="Tinta da Raiz"
              subtitle="Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/the-free-food-tape-listening-party-entrevista-video"
              itemClass="entrevista video"
              image={listeningparty}
              title="The Free Food Tape - Listening Party"
              subtitle="Entrevista, Vídeo"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="/media/the-free-food-tape-critica"
              itemClass="critica"
              image={tfftreb}
              title="R&B - The Free Food Tape"
              subtitle="Crítica"
            />
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaContainer mediaContainerMobile">
          <div className="mediaTitle mediaTitleMobile">Media</div>
          <div className="mediaSeparator mediaSeparatorMobile"></div>
          <div className="mediaFilterButtons mediaFilterButtonsMobile">
            <div
              className="filterButton filterButtonMobile showAll is-checked"
              data-filter="*"
              onClick={this.showAll}
            >
              Show All
            </div>
            <div
              className="filterButton filterButtonMobile videos"
              data-filter=".video"
              onClick={this.showVideos}
            >
              Vídeos
            </div>
            <div
              className="filterButton filterButtonMobile entrevistas"
              data-filter=".entrevista"
              onClick={this.showEntrevistas}
            >
              Entrevistas
            </div>
            <div
              className="filterButton filterButtonMobile criticas"
              data-filter=".critica"
              onClick={this.showCriticas}
            >
              Críticas
            </div>
          </div>
          <div className="mediaItemsContainer mediaItemsContainerMobile">
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=7BYFJL81Dz4"
              itemClass="video"
              image={lagrimas}
              title="Lágrimas (Part 2)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2019/12/13/culturaipsilon/entrevista/-slow-j-you-are-forgiven-significa-ja-nasceste-perdao-ideia-liberdade-1896669"
              itemClass="critica"
              image={yafpublico}
              title="Público - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/"
              itemClass="critica"
              image={yafcca}
              title="CCA - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=56-ye8jX4h0"
              itemClass="video"
              image={tambemsonhar}
              title="Também Sonhar (Part 1)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-you-are-forgiven/"
              itemClass="critica"
              image={yafreb}
              title="R&B - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/"
              itemClass="entrevista"
              image={rimasebatidas}
              title="Rimas e Batidas"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=tHJNEAsLCCo"
              itemClass="video"
              image={nuncapares}
              title="Nunca Pares"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=sXlD6Wcpy6c"
              itemClass="video"
              image={megahits}
              title="Mega Hits"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-art-of-slowing-down/"
              itemClass="critica"
              image={taosdreb}
              title="R&B - The Art Of Slowing Down"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940"
              itemClass="entrevista"
              image={publico}
              title="Público"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=rzPGBIPWuHE"
              itemClass="video"
              image={arte}
              title="Arte (Meet Speedy)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=o7u8aX8dUPE"
              itemClass="video"
              image={antena3}
              title="Antena 3"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
              itemClass="entrevista video"
              image={mdemusica}
              title="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=1rETsKuw2Hk"
              itemClass="video"
              image={vidaboa}
              title="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=flILuwfNWbM"
              itemClass="video"
              image={sofarlisbon}
              title="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=5R8SIoaIwE0"
              itemClass="video"
              image={comida}
              title="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=Y5PINCsl9RQ"
              itemClass="video"
              image={cristalina}
              title="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=SQJfxC6n6KY"
              itemClass="entrevista video"
              image={bpslowj}
              title="BP vs Slow J [RVCA | Surge Skate]"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=_SphtRjwOSk"
              itemClass="video"
              image={tintadaraiz}
              title="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=bAFJhH9l8IQ"
              itemClass="entrevista video"
              image={listeningparty}
              title="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
              itemClass="critica"
              image={tfftreb}
              title="R&B - The Free Food Tape"
            />
          </div>
        </div>
      );
    }
  }
}
