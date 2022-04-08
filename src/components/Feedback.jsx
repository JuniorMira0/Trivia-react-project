//   **Observações técnicas**

//   * A mensagem deve ser "Could be better..." caso a pessoa acerte menos de 3 perguntas
//   * A mensagem deve ser "Well Done!" caso a pessoa acerte 3 perguntas ou mais
//   * O elemento da mensagem de _feedback_ deve possuir o atributo `data-testid` com o valor `feedback-text`

//   **O que será avaliado**

//   * Será validado se ao acertar menos de 3 perguntas a mensagem de _feedback_ é "Could be better..."
//   * Será validado se ao acertar 3 perguntas a mensagem de _feedback_ é "Well Done!"
//   * Será validado se ao acertar mais de 3 perguntas a mensagem de _feedback_ é "Well Done!"

import React from 'react';

class Feedback extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { score } = this.state;
    const lessThan3 = 2;
    return (
      score <= lessThan3 ? <span data-testid="feedback-text">Could be better...</span>
        : <span data-testid="feedback-text">Well Done!</span>
    );
  }
}

export default Feedback;
