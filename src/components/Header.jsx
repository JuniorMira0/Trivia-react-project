import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { name, score, gravatarEmail } = user;
    const avatar = md5(gravatarEmail).toString();
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${avatar}` }
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
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    gravatarEmail: PropTypes.string,
  }).isRequired,
};

// Header.defaultProps = {
//   user: {
//     name: '',
//     score: 0,
//     gravatarEmail: '',
//   },

// };

export default connect(mapStateToProps)(Header);
