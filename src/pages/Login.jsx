/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
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
      <main style={ { backgroundColor: '#290661' } }>
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-auto">
              <div className="row">
                <img
                  src="https://i.imgur.com/qZJ52co.png"
                  alt="lorem picsum"
                  style={ { width: '25vw' } }
                  className="img-thumbnail mb-3 p-2"
                />
              </div>
              <form>
                <div className="row">
                  <div className="col">
                    <label
                      htmlFor="femail"
                      className="form-label"
                      style={ { color: 'white' } }
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="playerEmail"
                      id="femail"
                      onChange={ this.saveInfoToState }
                      data-testid="input-gravatar-email"
                      className="form-control"
                    />
                    <label
                      htmlFor="fname"
                      className="form-label mt-2"
                      style={ { color: 'white' } }
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="playerName"
                      id="fname"
                      onChange={ this.saveInfoToState }
                      data-testid="input-player-name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="fsbmt">
                      <input
                        type="button"
                        name="button-sbmt"
                        id="fsbmt"
                        value="Play"
                        disabled={ !(playerEmail !== '' && playerName !== '') }
                        onClick={ this.redirectToPlay }
                        data-testid="btn-play"
                        className="btn btn-primary"
                      />
                    </label>
                    <button
                      type="button"
                      name="button-config"
                      onClick={ this.redirectToConfig }
                      data-testid="btn-settings"
                      className="btn btn-secondary ms-2"
                    >
                      Configurations
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
