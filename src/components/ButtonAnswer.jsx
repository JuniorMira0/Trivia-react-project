import React from 'react';
import PropTypes from 'prop-types';

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
          data-testid={ alt === correct ? (
            'correct-answer') : `wrong-answer-${index}` }
          type="button"
          key={ index }
          onClick={ onClick }
        >
          { alt }
        </button>
      ))
    );
  }
}

ButtonAnswer.propTypes = {
  correct: PropTypes.string.isRequired,
  alternativas: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAnswer;
