import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../trivia.png';
import { fetchApiToken, saveUser } from '../actions';

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
    const { name, email } = this.state;
    const { history, userName, fetchToken } = this.props;
    fetchToken();
    userName(name, email);
    this.setState({
      name: '',
      email: '',
    });
    history.push('/game');
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
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              data-testid="input-player-name"
              placeholder="digite seu nome"
            />
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="input-gravatar-email"
              placeholder="digite seu email"
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
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchApiToken()),
  userName: (name, email) => dispatch(saveUser(name, email)),
});

Login.propTypes = {
  fetchToken: PropTypes.func,
  userName: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
