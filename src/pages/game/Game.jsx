import React from 'react';
import Header from '../../components/Header';
import Options from '../../components/Options';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Options { ...this.props } />
      </div>
    );
  }
}

export default Game;
