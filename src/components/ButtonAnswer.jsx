import React from 'react';
import PropTypes from 'prop-types';
import './ButtonAnswer.css';

class ButtonAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      shuflled: [],
    };
  }

  componentDidMount() {
    this.shuflled();
  }

  componentDidUpdate(prev) {
    const { alternativas } = this.props;
    if (prev.alternativas !== alternativas) this.shuflled();
  }

  shuflled = () => {
    // https://flaviocopes.com/how-to-shuffle-array-javascript/

    const { alternativas } = this.props;
    const VALOR_0_5 = 0.5;
    const shuflled = alternativas.sort(() => Math.random() - VALOR_0_5);
    this.setState({
      shuflled,
    });
  };

  render() {
    const { shuflled } = this.state;
    const { onClick, correct } = this.props;
    return (
      shuflled.map((alt, index) => (
        <button
          className={
             answered && (correct === alt ? 'correct-answer' : 'wrong-answer')
          }
          data-testid={ alt === correct ? (
            'correct-answer') : `wrong-answer-${index}` }
          type="button"
          key={ index }
          onClick={ onClick }
          name={ alt }
        >
          { alt }
        </button>
      ))
    );

  }
}

ButtonAnswer.propTypes = {
  answered: PropTypes.bool.isRequired,
  correct: PropTypes.string.isRequired,
  alternativas: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAnswer;

// 9. Crie o placar com as seguintes características:

//   **PRIORIDADE 3** - Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

//   **Observações técnicas**

//   * Você deve salvar a pontuação **atual** no estado no redux na chave player.score
//   * Leia a seção [Observações técnicas](#observações-técnicas) para mais detalhes
//   * Respostas erradas não devem somar ao placar
//   * A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`

//    **O que será avaliado**

//    * Será validado se os pontos são somados ao acertar uma questão
//    * Será validado se os pontos não são somados ao errar uma questão
