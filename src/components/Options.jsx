import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswer';
import { handleScore } from '../actions';
import './Options.css';

const POINTS = 10;
const HARD = 3;
const MEDIUM = 2;
const EASY = 1;

class Options extends React.Component {
  constructor() {
    super();
    this.state = {
      answerIndex: 0,
    };
  }

  mudarIndexResults = () => {
    const INDEX_MAX = 4;
    this.setState((prev) => ({
      answerIndex:
        prev.answerIndex < INDEX_MAX ? prev.answerIndex + 1 : INDEX_MAX,
    }));
  };

  handleClkBtnNext = () => {
    this.mudarIndexResults();
  }

  handleClickFeedback = () => {
    const { history } = this.props;
    history.push('/feedback');
  }

  shuflled = (alternativas) => {
    const VALOR_0_5 = 0.5;
    const shuflled = alternativas.sort(() => Math.random() - VALOR_0_5);
    return shuflled;
  };

  getScoreBoard = (target, timer) => {
    const { answerIndex } = this.state;
    const { results, handleScoreBoard } = this.props;
    const { name } = target;
    const correctAnswer = results[answerIndex].correct_answer;
    if (name === correctAnswer) {
      switch (results[answerIndex].difficulty) {
      case 'hard':
        handleScoreBoard(POINTS + (timer * HARD));
        break;
      case 'medium':
        handleScoreBoard(POINTS + (timer * MEDIUM));
        break;
      case 'easy':
        handleScoreBoard(POINTS + (timer * EASY));
        break;
      default:
        console.log('Error');
        break;
      }
    }
  }

  render() {
    const { answerIndex } = this.state;
    const { results } = this.props;
    const shuflled = this.shuflled([
      ...results[answerIndex].incorrect_answers,
      results[answerIndex].correct_answer]);
    return (
      <div>
        <div className="container">
          <section className="py-5">
            <blockquote
              className="blockquote blockquote-custom bg-white p-5 shadow rounded"
            >
              <small
                data-testid="question-category"
              >
                {results[answerIndex].category}

              </small>
              <p
                className="mb-0 mt-2 font-italic"
                data-testid="question-text"
              >
                {results[answerIndex].question}
              </p>
            </blockquote>
          </section>
        </div>
        <div
          data-testid="answer-options"
          className="container py-5"
        >
          <ButtonAnswer
            getTimer={ this.getTimer }
            handleClickFeedback={ this.handleClickFeedback }
            answerIndex={ answerIndex }
            alternativas={ shuflled }
            correct={ results[answerIndex].correct_answer }
            onClick={ this.getScoreBoard }
            handleClkBtnNext={ this.handleClkBtnNext }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  results: state.answer.results,
  loading: state.answer.loading,
});

Options.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,

  handleScoreBoard: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    difficulty: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleScoreBoard: (score) => dispatch(handleScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
