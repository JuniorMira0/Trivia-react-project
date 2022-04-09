import React from 'react';
import PropTypes from 'prop-types';

class ButtonAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      next: false,
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    this.setState({
      next: true,
    });
    onClick();
  }

  handleClickNext = () => {
    const { handleClkBtnNext } = this.props;
    this.setState({
      next: false,
    });
    handleClkBtnNext();
  }

  render() {
    const { next } = this.state;
    const { correct, alternativas } = this.props;
    return (
      <>
        {alternativas.map((alt, index) => (
          <button
            data-testid={ alt === correct ? (
              'correct-answer') : `wrong-answer-${index}` }
            type="button"
            key={ index }
            onClick={ this.handleClick }
          >
            { alt }
          </button>
        ))}
        {/* { next && ( */}
        <button
          // disabled={ !next }
          style={ next ? { visibility: 'visible' } : { visibility: 'hidden' } }
          data-testid="btn-next"
          type="button"
          onClick={ this.handleClickNext }
        >
          Next
        </button>
        {/* )} */}
      </>
    );
  }
}

ButtonAnswer.propTypes = {
  handleClkBtnNext: PropTypes.func.isRequired,
  correct: PropTypes.string.isRequired,
  alternativas: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAnswer;
