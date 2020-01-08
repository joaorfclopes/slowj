import React from "react";
import "isotope-layout";
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
              link="https://www.youtube.com/watch?v=7BYFJL81Dz4"
              class="video"
              image={lagrimas}
              description="Lágrimas (Part 2)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2019/12/13/culturaipsilon/entrevista/-slow-j-you-are-forgiven-significa-ja-nasceste-perdao-ideia-liberdade-1896669"
              class="entrevista"
              image={yafpublico}
              description="Público - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/"
              class="entrevista"
              image={yafcca}
              description="CCA - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=56-ye8jX4h0"
              class="video"
              image={tambemsonhar}
              description="Também Sonhar (Part 1)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-you-are-forgiven/"
              class="entrevista"
              image={yafreb}
              description="R&B - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/"
              class="entrevista"
              image={rimasebatidas}
              description="Rimas e Batidas"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=tHJNEAsLCCo"
              class="video"
              image={nuncapares}
              description="Nunca Pares"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=sXlD6Wcpy6c"
              class="video"
              image={megahits}
              description="Mega Hits"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-art-of-slowing-down/"
              class="entrevista"
              image={taosdreb}
              description="R&B - The Art Of Slowing Down"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940"
              class="entrevista"
              image={publico}
              description="Público"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=rzPGBIPWuHE"
              class="video"
              image={arte}
              description="Arte (Meet Speedy)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=o7u8aX8dUPE"
              class="video"
              image={antena3}
              description="Antena 3"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
              class="entrevista video"
              image={mdemusica}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=1rETsKuw2Hk"
              class="video"
              image={vidaboa}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=flILuwfNWbM"
              class="video"
              image={sofarlisbon}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=5R8SIoaIwE0"
              class="video"
              image={comida}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=Y5PINCsl9RQ"
              class="video"
              image={cristalina}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=SQJfxC6n6KY"
              class="entrevista video"
              image={bpslowj}
              description="BP vs Slow J [RVCA | Surge Skate]"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=_SphtRjwOSk"
              class="video"
              image={tintadaraiz}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=bAFJhH9l8IQ"
              class="entrevista video"
              image={listeningparty}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
              class="entrevista"
              image={tfftreb}
              description="R&B - The Free Food Tape"
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
              link="https://www.youtube.com/watch?v=7BYFJL81Dz4"
              class="video"
              image={lagrimas}
              description="Lágrimas (Part 2)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2019/12/13/culturaipsilon/entrevista/-slow-j-you-are-forgiven-significa-ja-nasceste-perdao-ideia-liberdade-1896669"
              class="entrevista"
              image={yafpublico}
              description="Público - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.comunidadeculturaearte.com/you-are-forgiven-slow-j-no-seu-estado-mais-puro/"
              class="entrevista"
              image={yafcca}
              description="CCA - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=56-ye8jX4h0"
              class="video"
              image={tambemsonhar}
              description="Também Sonhar (Part 1)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-you-are-forgiven/"
              class="entrevista"
              image={yafreb}
              description="R&B - You Are Forgiven"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-preciso-desconstruir/"
              class="entrevista"
              image={rimasebatidas}
              description="Rimas e Batidas"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=tHJNEAsLCCo"
              class="video"
              image={nuncapares}
              description="Nunca Pares"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=sXlD6Wcpy6c"
              class="video"
              image={megahits}
              description="Mega Hits"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-art-of-slowing-down/"
              class="entrevista"
              image={taosdreb}
              description="R&B - The Art Of Slowing Down"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.publico.pt/2017/03/24/culturaipsilon/noticia/slow-j-1765940"
              class="entrevista"
              image={publico}
              description="Público"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=rzPGBIPWuHE"
              class="video"
              image={arte}
              description="Arte (Meet Speedy)"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=o7u8aX8dUPE"
              class="video"
              image={antena3}
              description="Antena 3"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="http://mdemusica.pt/2016/11/09/slow-j-album-vai-algo-especial/"
              class="entrevista video"
              image={mdemusica}
              description="M de Musica"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=1rETsKuw2Hk"
              class="video"
              image={vidaboa}
              description="Vida Boa"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=flILuwfNWbM"
              class="video"
              image={sofarlisbon}
              description="O Cliente @Sofar Lisbon"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=5R8SIoaIwE0"
              class="video"
              image={comida}
              description="Comida"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=Y5PINCsl9RQ"
              class="video"
              image={cristalina}
              description="Cristalina"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=SQJfxC6n6KY"
              class="entrevista video"
              image={bpslowj}
              description="BP vs Slow J [RVCA | Surge Skate]"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=_SphtRjwOSk"
              class="video"
              image={tintadaraiz}
              description="Tinta da Raiz"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.youtube.com/watch?v=bAFJhH9l8IQ"
              class="entrevista video"
              image={listeningparty}
              description="The Free Food Tape - Listening Party"
            />
            <MediaItem
              isDesktop={this.props.isDesktop}
              isMobile={this.props.isMobile}
              link="https://www.rimasebatidas.pt/slow-j-the-free-food-tape-ep/"
              class="entrevista"
              image={tfftreb}
              description="R&B - The Free Food Tape"
            />
          </div>
        </div>
      );
    }
  }
}
