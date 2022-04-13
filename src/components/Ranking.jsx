import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRanking } from '../services/localStorage';
import { resetAnswer, resetToken } from '../actions';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const ranking = getRanking();
    this.setState({
      ranking,
    });
    // console.log(ranking);
  }

  handleClick = () => {
    const { history, resetResults, resetTok } = this.props;
    resetResults();
    resetTok();
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    const screenRanking = ranking.sort((a, b) => (b.score - a.score));
    return (
      <div>
        <h1 data-testid="ranking-title">RANKING</h1>
        <div>
          { screenRanking.map(({ picture, name, score }, index) => (
            <div key={ index }>
              <img src={ picture } alt={ name } />
              <span data-testid={ `player-name-${index}` }>{ name }</span>
              <span data-testid={ `player-score-${index}` }>{ score }</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Voltar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetResults: () => dispatch(resetAnswer()),
  resetTok: () => dispatch(resetToken()),
});

Ranking.propTypes = {
  resetTok: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Ranking);
