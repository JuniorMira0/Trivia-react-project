import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { name, score, gravatarEmail } = user;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarEmail }
          alt={ name }
        />
        <p
          data-testid="header-player-name"
        >
          { name }
        </p>
        <p
          data-testid="header-score"
        >
          { score }
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.player,
});

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    gravatarEmail: PropTypes.string,
  }),
};

Header.defaultProps = {
  user: {
    name: '',
    score: 0,
    gravatarEmail: '',
  },
};

export default connect(mapStateToProps)(Header);
