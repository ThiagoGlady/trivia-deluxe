import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { playerLogin } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerEmail: '',
      playerName: '',
      willRedirectToGame: false,
      willRedirectToConfig: false,
    };
  }

  redirectToPlay = async () => {
    const { saveTokenToStore } = this.props;
    const { playerEmail, playerName } = this.state;
    saveTokenToStore(playerEmail, playerName);

    this.setState({
      willRedirectToGame: true,
    });
  }

  redirectToConfig = () => {
    this.setState({
      willRedirectToConfig: true,
    });
  }

  saveInfoToState = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      playerEmail,
      playerName,
      willRedirectToGame,
      willRedirectToConfig,
    } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="femail">
            Email:
            <input
              type="email"
              name="playerEmail"
              id="femail"
              onChange={ this.saveInfoToState }
              data-testid="input-gravatar-email"
            />
          </label>
          <label htmlFor="fname">
            Nome:
            <input
              type="text"
              name="playerName"
              id="fname"
              onChange={ this.saveInfoToState }
              data-testid="input-player-name"
            />
          </label>
          <label htmlFor="fsbmt">
            <input
              type="button"
              name="button-sbmt"
              id="fsbmt"
              value="Play"
              disabled={ !(playerEmail !== '' && playerName !== '') }
              onClick={ this.redirectToPlay }
              data-testid="btn-play"
            />
          </label>
        </form>
        <button
          type="button"
          name="button-config"
          onClick={ this.redirectToConfig }
          data-testid="btn-settings"
        >
          Configurações
        </button>
        { willRedirectToConfig && <Redirect to="/config" /> }
        { willRedirectToGame && <Redirect to="/game" /> }
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveTokenToStore: (email, name) => (dispatch(playerLogin(email, name))),
});

Login.propTypes = {
  saveTokenToStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
