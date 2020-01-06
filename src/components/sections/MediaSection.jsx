import React from "react";
import "isotope-layout";
import MediaItem from "./MediaItem";
import image1 from "../../assets/images/vidaboa.jpg";
import image2 from "../../assets/images/tintadaraiz.jpg";
import image3 from "../../assets/images/listeningparty.jpg";
import image4 from "../../assets/images/rapnoticias.jpg";
import image5 from "../../assets/images/sofarlisbon.jpg";
import image6 from "../../assets/images/mdemusica.jpg";
import image7 from "../../assets/images/rimasebatidas.jpg";
import image8 from "../../assets/images/h2t.jpg";
import image9 from "../../assets/images/cristalina.jpg";
import image10 from "../../assets/images/comida.jpg";
import image11 from "../../assets/images/bpslowj.jpg";

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
              image={image1}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image2}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image3}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image4}
              description="Rap Notícias"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image5}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image6}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image7}
              description="Crítica H2T"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image8}
              description="Crítica R&B"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image9}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image10}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image11}
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
              image={image1}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image2}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image3}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image4}
              description="Rap Notícias"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image5}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image6}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image7}
              description="Crítica H2T"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image8}
              description="Crítica R&B"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image9}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image10}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              image={image11}
              description="BP vs Slow J [RVCA | Surge Skate]"
            />
          </div>
        </div>
      );
    }
  }
}
