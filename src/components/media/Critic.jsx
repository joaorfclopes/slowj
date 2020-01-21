import React from "react";

export default class Critic extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticDesktop">
          <div
            className="mediaItemPageCriticImage mediaItemPageCriticImageDesktop"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="mediaItemPageCriticText mediaItemPageCriticTextDesktop">
            <div className="mediaItemPageCriticTitle mediaItemPageCriticTitleDesktop">
              Title
            </div>
            <div className="mediaItemPageCriticDesc mediaItemPageCriticDescDesktop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur placerat lacinia. Donec aliquam nunc sit amet
              efficitur cursus. Etiam aliquet justo non tortor sagittis, eget
              eleifend nunc congue. Vestibulum venenatis, justo et semper
              venenatis, lacus velit dignissim sem, eu convallis ante dolor eu
              nibh. Suspendisse potenti. Morbi pharetra rutrum dolor, at
              fringilla magna. Donec ullamcorper, leo vel posuere pulvinar,
              lorem nulla pulvinar lectus, sed rutrum elit elit nec neque. Duis
              vitae risus et neque pretium fermentum eget eu felis. Sed sit amet
              mi accumsan, ullamcorper ipsum vitae, mollis urna. Integer vel mi
              mauris. Nam sit amet bibendum augue. Etiam suscipit augue vel
              pulvinar ornare. Maecenas sit amet metus non massa dignissim
              pulvinar vitae quis dui.
            </div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="mediaItemPageCritic mediaItemPageCriticMobile">
          <div
            className="mediaItemPageCriticImage mediaItemPageCriticImageMobile"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="mediaItemPageCriticText mediaItemPageCriticTextMobile">
            <div className="mediaItemPageCriticTitle mediaItemPageCriticTitleMobile">
              Title
            </div>
            <div className="mediaItemPageCriticDesc mediaItemPageCriticDescMobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur placerat lacinia. Donec aliquam nunc sit amet
              efficitur cursus. Etiam aliquet justo non tortor sagittis, eget
              eleifend nunc congue. Vestibulum venenatis, justo et semper
              venenatis, lacus velit dignissim sem, eu convallis ante dolor eu
              nibh. Suspendisse potenti. Morbi pharetra rutrum dolor, at
              fringilla magna. Donec ullamcorper, leo vel posuere pulvinar,
              lorem nulla pulvinar lectus, sed rutrum elit elit nec neque. Duis
              vitae risus et neque pretium fermentum eget eu felis. Sed sit amet
              mi accumsan, ullamcorper ipsum vitae, mollis urna. Integer vel mi
              mauris. Nam sit amet bibendum augue. Etiam suscipit augue vel
              pulvinar ornare. Maecenas sit amet metus non massa dignissim
              pulvinar vitae quis dui.
            </div>
          </div>
        </div>
      );
    }
  }
}
