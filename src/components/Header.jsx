import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import './Header.css';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { name, score, gravatarEmail } = user;
    const avatar = md5(gravatarEmail).toString();
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${avatar}` }
            alt={ name }
          />
          <ul className="nav-item active">
            <li
              className="nav-link"
              data-testid="header-player-name"
            >
              { name }
            </li>
          </ul>
          <p
            data-testid="header-score"
          >
            Score:
            <br />
            { score }
          </p>
        </div>
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
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
