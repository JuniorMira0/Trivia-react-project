import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswer';
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

  handleClick = () => {
    // const { results } = this.props;
    // if (text === results[0].correct_answer) {
    //   ponto += 1;
    // }
    this.setState({
      answered: true,
    });
    // this.mudarIndexResults();
  };

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

// const mapDispatchToProps = (dispatch) => ({
//   fetchAnswer: (token) => dispatch(fetchApiAnswer(token)),
//   fetchToken: () => dispatch(fetchApiToken()),
// });

Options.propTypes = {
  // loading: PropTypes.bool.isRequired,
  // fetchToken: PropTypes.func.isRequired,
  // fetchAnswer: PropTypes.func.isRequired,
  // token: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  // incorrects: PropTypes.arrayOf(PropTypes.string).isRequired,
  // correct: PropTypes.string.isRequired,
  // mudarIndexResults: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Options);
