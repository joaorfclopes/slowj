import React from "react";

export default class Section1 extends React.Component {
  render() {
    if (this.props.isDesktop === true && this.props.isMobile === false) {
      return (
        <div className="bioSection1 bioSection1Desktop">
          <div className="bioText bioTextDesktop">
            <p>
              <strong>João Batista Coelho a.k.a. Slow J (21/09/1992)</strong>
            </p>
            <p>
              O trabalho todos podem conhecer, mas é o modo como o trabalho é
              feito que define aquele que o faz. Assim a natureza obsessiva com
              que vive a música é a primeira coisa que nos vem à cabeça quando
              pensamos em Slow J.
            </p>
            <p>
              Nascido e criado na cidade de Setúbal até aos 8 anos, muda de casa
              dez vezes nos doze anos seguintes. Passando por locais como
              Carcavelos, Cascais e Alenquer, encontra na música a constante e
              uma companhia de viagem.
            </p>
            <p>
              Dez anos depois é esta obsessão que o leva a Londres onde se
              dedica a fazer música sob o pretexto de estudar Engenharia de Som.
            </p>
            <p>
              Interrompendo o curso, regressa a Portugal em 2013 para se dedicar
              inteiramente à produção musical começando por estagiar na Bigbit
              Estúdios (Lisboa) onde tem a oportunidade de trabalhar com alguns
              dos nomes maiores do hip hop nacional, como NBC e Valete.
            </p>
            <p>
              Inspirando-se na profundidade da poesia de Sam the Kid e Manuel
              Cruz e na viagem de energia pura pela qual nos levam Imagine
              Dragons e Da Weasel, Slow J apresenta-nos agora o seu projecto de
              estreia,
            </p>
            <p>Para abrir o apetite… The Free Food Tape</p>
            <div className="separator separatorDesktop"></div>
            <p>
              <strong>Para Informações Gerais:</strong>
            </p>
            <p>Geral@54.246.242.189</p>
          </div>
        </div>
      );
    }
    if (this.props.isDesktop === false && this.props.isMobile === true) {
      return (
        <div className="bioSection1 bioSection1Mobile">
          <div className="bioText bioTextMobile">
            <p>
              <strong>João Batista Coelho a.k.a. Slow J (21/09/1992)</strong>
            </p>
            <p>
              O trabalho todos podem conhecer, mas é o modo como o trabalho é
              feito que define aquele que o faz. Assim a natureza obsessiva com
              que vive a música é a primeira coisa que nos vem à cabeça quando
              pensamos em Slow J.
            </p>
            <p>
              Nascido e criado na cidade de Setúbal até aos 8 anos, muda de casa
              dez vezes nos doze anos seguintes. Passando por locais como
              Carcavelos, Cascais e Alenquer, encontra na música a constante e
              uma companhia de viagem.
            </p>
            <p>
              Dez anos depois é esta obsessão que o leva a Londres onde se
              dedica a fazer música sob o pretexto de estudar Engenharia de Som.
            </p>
            <p>
              Interrompendo o curso, regressa a Portugal em 2013 para se dedicar
              inteiramente à produção musical começando por estagiar na Bigbit
              Estúdios (Lisboa) onde tem a oportunidade de trabalhar com alguns
              dos nomes maiores do hip hop nacional, como NBC e Valete.
            </p>
            <p>
              Inspirando-se na profundidade da poesia de Sam the Kid e Manuel
              Cruz e na viagem de energia pura pela qual nos levam Imagine
              Dragons e Da Weasel, Slow J apresenta-nos agora o seu projecto de
              estreia,
            </p>
            <p>Para abrir o apetite… The Free Food Tape</p>
            <div className="separator separatorMobile"></div>
            <p>
              <strong>Para Informações Gerais:</strong>
            </p>
            <p>Geral@54.246.242.189</p>
          </div>
        </div>
      );
    }
  }
}
