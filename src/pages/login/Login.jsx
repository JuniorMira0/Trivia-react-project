import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../trivia.png';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      btnDisable: true,
    };
  }

  validation = () => {
    const { name, email } = this.state;
    const fieldMinLenght = 2;
    const regexEmail = email.match(/[\w.!#$%&'*+=?^_`{|}~-]+@[\w.-]+\.[A-Z]{2,}/gmi);
    const emailValidate = email.match(regexEmail);
    this.setState({
      btnDisable: !(emailValidate && name.length >= fieldMinLenght),
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validation());
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  handleBtnSetting = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { name, email, btnDisable } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            SUA VEZ
          </p>
          <div className="inputs-box">
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="input-gravatar-email"
            />

            <input
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              data-testid="input-player-name"
            />
            <button
              type="button"
              data-testid="btn-play"
              name="btn-play"
              onClick={ this.handleClick }
              disabled={ btnDisable }
            >
              Play
            </button>
            <button
              onClick={ this.handleBtnSetting }
              type="button"
              data-testid="btn-settings"
            >
              Settings
            </button>
          </div>
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
