import React from 'react';
import PropTypes from 'prop-types';
import { getRanking } from '../actions/localStorage';

class Ranking extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { ranking } = this.props;
    const screenRanking = ranking.sort((a, b) => (b.score - a.score));
    return (
      <div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Voltar
        </button>
        <div>
          { screenRanking.map(({ picture, name, score }, index) => (
            <div key={ index }>
              <img src={ picture } alt="" />
              <span data-testid={ `player-name-${index}` }>{ name }</span>
              <span data-testid={ `player-score-${index}` }>{ score }</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  ranking: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ranking;
