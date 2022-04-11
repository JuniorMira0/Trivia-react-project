import React from 'react';
import PropTypes from 'prop-types';
import { getRanking } from '../services/localStorage';

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
    console.log(ranking);
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    const screenRanking = ranking.sort((a, b) => (b.score - a.score));
    return (
      <div>
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

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
