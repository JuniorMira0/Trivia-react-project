import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { fetchApiAnswer } from '../../actions';

class Game extends React.Component {
  componentDidMount = () => {
    const { token, fetchAnswer } = this.props;
    fetchAnswer(token);
  }

  render() {
    return (
      <div>
        <Header />
        gameeeeer
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnswer: (token) => dispatch(fetchApiAnswer(token)),
});

Game.propTypes = {
  fetchAnswer: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
