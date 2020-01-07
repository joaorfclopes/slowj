import React from "react";
import "isotope-layout";
import MediaItem from "./MediaItem";
import vidaboa from "../../assets/images/vidaboa.jpg";
import tintadaraiz from "../../assets/images/tintadaraiz.jpg";
import listeningparty from "../../assets/images/listeningparty.jpg";
import rapnoticias from "../../assets/images/rapnoticias.jpg";
import sofarlisbon from "../../assets/images/sofarlisbon.jpg";
import mdemusica from "../../assets/images/mdemusica.jpg";
import rimasebatidas from "../../assets/images/rimasebatidas.jpg";
import cristalina from "../../assets/images/cristalina.jpg";
import comida from "../../assets/images/comida.jpg";
import bpslowj from "../../assets/images/bpslowj.jpg";

export default class MediaSection extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaContainer mediaContainerDesktop">
          <div className="mediaTitle mediaTitleDesktop">Media</div>
          <div className="mediaSeparator mediaSeparatorDesktop"></div>
          <div
            className="mediaItemsContainer mediaItemsContainerDesktop"
            data-isotope='{ "itemSelector": ".mediaItem", "layoutMode": "fitRows" }'
          >
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=1rETsKuw2Hk"
              image={vidaboa}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=_SphtRjwOSk"
              image={tintadaraiz}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=bAFJhH9l8IQ"
              image={listeningparty}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://www.rapnoticias.pt/index.php/rapnacional/265-ep-slow-j-the-free-food-tape"
              image={rapnoticias}
              description="Rap Notícias"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=flILuwfNWbM"
              image={sofarlisbon}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
              image={mdemusica}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
              image={rimasebatidas}
              description="Crítica R&B"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=Y5PINCsl9RQ"
              image={cristalina}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=5R8SIoaIwE0"
              image={comida}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=SQJfxC6n6KY"
              image={bpslowj}
              description="BP vs Slow J [RVCA | Surge Skate]"
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
          <div
            className="mediaItemsContainer mediaItemsContainerMobile"
            data-isotope='{ "itemSelector": ".mediaItem", "layoutMode": "fitRows" }'
          >
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=1rETsKuw2Hk"
              image={vidaboa}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=_SphtRjwOSk"
              image={tintadaraiz}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=bAFJhH9l8IQ"
              image={listeningparty}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://www.rapnoticias.pt/index.php/rapnacional/265-ep-slow-j-the-free-food-tape"
              image={rapnoticias}
              description="Rap Notícias"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=flILuwfNWbM"
              image={sofarlisbon}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
              image={mdemusica}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
              image={rimasebatidas}
              description="Crítica R&B"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=Y5PINCsl9RQ"
              image={cristalina}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=5R8SIoaIwE0"
              image={comida}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=SQJfxC6n6KY"
              image={bpslowj}
              description="BP vs Slow J [RVCA | Surge Skate]"
            />
          </div>
        </div>
      );
    }
  }
}
