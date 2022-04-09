import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import './ButtonAnswer.css';

class ButtonAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      nextClicked: false,
      target: {},
    };
  }

  componentDidUpdate(prevProps, PrevState) {
    const { timer, target } = this.state;
    const { onClick } = this.props;
    console.log(timer);
    console.log(PrevState.timer);
    if (PrevState.timer !== timer) onClick(target, timer);
  }

  getTimer = (timer) => {
    this.setState(() => ({ timer }));
  }

  nextToTrue = () => {
    this.setState({
      nextClicked: true,
    });
  }

  handleClick = ({ target }) => {
    this.setState({
      nextClicked: true,
      target,
    });
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
        {!nextClicked && <Timer
          nextFalse={ this.nextToTrue }
          getTimer={ this.getTimer }
          nextClicked={ nextClicked }
        />}
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
              onClick={ this.handleClick }
              name={ alt }
            >
              { alt }
            </button>
          );
        })}
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
