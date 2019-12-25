import React from "react";

export default class Cover extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="contactsContainer contactsContainerDesktop">
          <div className="contactsTitle contactsTitleDesktop">Contacts:</div>
          <div className="contacts contactsDesktop">
            <div className="contact contactDesktop">
              <div className="contactTitle contactTitleDesktop">[Booking]</div>
              <div className="contactText contactTextDesktop">
                <p>Ana Moitinho</p>
                <p>anamoitinho@radardossons.com</p>
                <p>(+351) 918 214 864</p>
                <p>Helena Pedro</p>
                <p>helenapedro@radardossons.com</p>
                <p>(+351) 968 618 117</p>
              </div>
            </div>
            <div className="contact contactDesktop">
              <div className="contactTitle contactTitleDesktop">
                [Management]
              </div>
              <div className="contactText contactTextDesktop">
                <p>Tomás Martins</p>
                <p>geral@senteisto.com</p>
              </div>
            </div>
            <div className="contact contactDesktop">
              <div className="contactTitle contactTitleDesktop">[Press]</div>
              <div className="contactText contactTextDesktop">
                <p>Gonçalo Lopes</p>
                <p>goncalo.lopespress@gmail.com</p>
                <p>(+351) 914 320 995</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="contactsContainer contactsContainerMobile">
          <div className="contactsTitle contactsTitleMobile">Contacts:</div>
          <div className="contacts contactsMobile">
            <div className="contact contactMobile">
              <div>
                <div className="contactTitle contactTitleMobile">[Booking]</div>
                <div className="contactText contactTextMobile">
                  <p>Ana Moitinho</p>
                  <p>anamoitinho@radardossons.com</p>
                  <p>(+351) 918 214 864</p>
                  <p>Helena Pedro</p>
                  <p>helenapedro@radardossons.com</p>
                  <p>(+351) 968 618 117</p>
                </div>
              </div>
            </div>
            <div className="contact contactMobile">
              <div>
                <div className="contactTitle contactTitleMobile">
                  [Management]
                </div>
                <div className="contactText contactTextMobile">
                  <p>Tomás Martins</p>
                  <p>geral@senteisto.com</p>
                </div>
              </div>
            </div>
            <div className="contact">
              <div>
                <div className="contactTitle contactTitleMobile">[Press]</div>
                <div className="contactText contactTextMobile">
                  <p>Gonçalo Lopes</p>
                  <p>goncalo.lopespress@gmail.com</p>
                  <p>(+351) 914 320 995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
