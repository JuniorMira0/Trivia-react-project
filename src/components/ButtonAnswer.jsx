import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import './ButtonAnswer.css';

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
    const { correct, alternativas, answerIndex, handleClickFeedback } = this.props;
    const ANSWER_INDEX_MAX = 4;
    return (
      <>
        {!next && <Timer handleClick={ this.handleClick } />}
        {/* <Timer handleClick={ this.handleClick } /> */}
        {alternativas.map((alt, index) => {
          const colorClass = (correct === alt ? 'correct-answer' : 'wrong-answer');
          return (
            <button
              disabled={ next }
              className={
                next ? colorClass : undefined
              }
              data-testid={ alt === correct ? (
                'correct-answer') : `wrong-answer-${index}` }
              type="button"
              key={ index }
              onClick={ this.handleClick }
            >
              { alt }
            </button>
          );
        })}
        <button
          id="btnNext"
          style={ next ? { visibility: 'visible' } : { visibility: 'hidden' } }
          data-testid="btn-next"
          type="button"
          onClick={ answerIndex === ANSWER_INDEX_MAX ? (
            handleClickFeedback) : this.handleClickNext }
        >
          {answerIndex === ANSWER_INDEX_MAX ? 'Feedback' : 'Next'}
        </button>
      </>
    );
  }
}

ButtonAnswer.propTypes = {
  handleClickFeedback: PropTypes.func.isRequired,
  answerIndex: PropTypes.number.isRequired,
  handleClkBtnNext: PropTypes.func.isRequired,
  correct: PropTypes.string.isRequired,
  alternativas: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default ButtonAnswer;
