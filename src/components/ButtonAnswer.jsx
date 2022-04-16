import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import './ButtonAnswer.css';

class ButtonAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      nextClicked: false,
      target: {},
    };
  }

  getTimer = (timer) => {
    const { target } = this.state;
    const { onClick } = this.props;
    onClick(target, timer);
  }

  nextToTrue = () => {
    this.setState({
      nextClicked: true,
    });
  }

  handleClick = ({ target }) => {
    this.setState(() => ({
      nextClicked: true,
      target,
    }));
  }

  handleClickNext = () => {
    const { handleClkBtnNext } = this.props;
    this.setState({
      nextClicked: false,
    });
    handleClkBtnNext();
  }

  render() {
    const { nextClicked } = this.state;
    const { correct, alternativas, answerIndex, handleClickFeedback } = this.props;
    const ANSWER_INDEX_MAX = 4;
    return (
      <>
        <div className="timer">
          {!nextClicked && <Timer
            nextFalse={ this.nextToTrue }
            getTimer={ this.getTimer }
            nextClicked={ nextClicked }
          />}
        </div>
        {alternativas.map((alt, index) => {
          const colorClass = (correct === alt ? 'correct-answer' : 'wrong-answer');
          return (
            <button
              disabled={ nextClicked }
              className={
                nextClicked ? colorClass : undefined
              }
              data-testid={ alt === correct ? (
                'correct-answer') : `wrong-answer-${index}` }
              type="button"
              key={ index }
              id={ index }
              onClick={ this.handleClick }
              name={ alt }
            >
              { alt }
            </button>
          );
        })}
        <div className="visible-button">
          <button
            className="buttonNext"
            style={ nextClicked ? { visibility: 'visible' } : { visibility: 'hidden' } }
            data-testid="btn-next"
            type="button"
            onClick={ answerIndex === ANSWER_INDEX_MAX ? (
              handleClickFeedback) : this.handleClickNext }
          >
            {answerIndex === ANSWER_INDEX_MAX ? 'Feedback' : 'Next'}
          </button>
        </div>
      </>
    );
  }
}

ButtonAnswer.propTypes = {
  getTimer: PropTypes.func.isRequired,
  handleClickFeedback: PropTypes.func.isRequired,
  answerIndex: PropTypes.number.isRequired,
  handleClkBtnNext: PropTypes.func.isRequired,
  correct: PropTypes.string.isRequired,
  alternativas: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default ButtonAnswer;
