import React from 'react';
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
        </header>

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
        </div>
      </div>
    );
  }
}

export default Login;
