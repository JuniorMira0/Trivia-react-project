import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswer';
import { handleScore } from '../actions';

// import fetchApiAnswer from '../service/triviaAPI';
// import { fetchApiAnswer, fetchApiToken } from '../actions';

class Options extends React.Component {
  constructor() {
    super();
    this.state = {
      answerIndex: 0,
      answered: false,
    };
  }

  mudarIndexResults = () => {
    const INDEX_MAX = 4;
    this.setState((prev) => ({
      answerIndex:
        prev.answerIndex < INDEX_MAX ? prev.answerIndex + 1 : INDEX_MAX,
    }));
  };

  handleClick = ({ target }) => {
    // const { results } = this.props;
    // if (text === results[0].correct_answer) {
    //   ponto += 1;
    // }
    // this.mudarIndexResults();
    const { answerIndex } = this.state;
    const { results, handleScoreBoard } = this.props;
    const { name } = target;
    const points = 10;
    const hard = 3;
    const medium = 2;
    const easy = 1;
    const timer = 10;
    const correctAnswer = results[answerIndex].correct_answer;
    if (name === correctAnswer) {
      switch (results[answerIndex].difficulty) {
      case 'hard':
        handleScoreBoard(points + (timer * hard));
        break;
      case 'medium':
        handleScoreBoard(points + (timer * medium));
        break;
      case 'easy':
        handleScoreBoard(points + (timer * easy));
        break;
      default:
        console.log('Error');
        break;
      }
      // 10 + timer * dificuldade (3, 2, 1) results[answerIndex].difficulty
    }
  }

  render() {
    const { answerIndex, answered } = this.state;
    const { results } = this.props;
    const alternativas = [
      ...results[answerIndex].incorrect_answers,
      results[answerIndex].correct_answer,
    ];
    console.log(alternativas);
    return (
      <div data-testid="answer-options">
        <p data-testid="question-category">{results[answerIndex].category}</p>
        <p data-testid="question-text">{results[answerIndex].question}</p>
        <ButtonAnswer
          alternativas={ [
            ...results[answerIndex].incorrect_answers,
            results[answerIndex].correct_answer,
          ] }
          correct={ results[answerIndex].correct_answer }
          onClick={ this.handleClick }
          answered={ answered }
        />
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
