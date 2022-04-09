import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswer';

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
      answerIndex: prev.answerIndex < INDEX_MAX ? prev.answerIndex + 1 : INDEX_MAX,
    }));
  }

  handleClick = () => {
  }

  handleClkBtnNext = () => {
    this.mudarIndexResults();
  }

  shuflled = (alternativas) => {
    const VALOR_0_5 = 0.5;
    const shuflled = alternativas.sort(() => Math.random() - VALOR_0_5);
    return shuflled;
  };

  render() {
    const { answerIndex } = this.state;
    const { results } = this.props;
    const shuflled = this.shuflled([
      ...results[answerIndex].incorrect_answers,
      results[answerIndex].correct_answer]);
    return (
      <div data-testid="answer-options">
        <p data-testid="question-category">{results[answerIndex].category}</p>
        <p data-testid="question-text">{results[answerIndex].question}</p>
        <ButtonAnswer
          alternativas={ shuflled }
          correct={ results[answerIndex].correct_answer }
          onClick={ this.handleClick }
          handleClkBtnNext={ this.handleClkBtnNext }
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
  results: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default connect(mapStateToProps)(Options);
