import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import axios from 'axios';
import { spotifyWebApiURL, spotifyProfileURL } from '../../constants';

export class Login extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      value: 'Spotify-Karaoke',
      authToken: '',
      authorized: false,
      profile: []
    };
  }

  componentDidMount = () => {
    let url = window.location.href;
    if (url.indexOf('token=') > -1) {
      let authToken = url
        .split('token=')[1]
        .split('&')[0]
        .trim();
      let authorized = true;
      window.MyVars = {
        authtoken: authToken
      };
      this.setState({ authToken, authorized });
    }
  };

  handleAuthFlow = event => {
    event.preventDefault();

    if (this.state.authorized) {
      const { authToken } = this.state;
      let user;
      axios
        .get(spotifyProfileURL + authToken)
        .then(response => {
          this.setState({ profile: response.data });
          user = response.data;
        })
        .then(() =>
          this.props.history.push('/landing', {
            current_user: { user },
            auth: { authToken }
          })
        )
        .catch(error => {
          window.location.assign(spotifyWebApiURL);
        });
    } else {
      window.location.assign(spotifyWebApiURL);
    }
  };

  render() {
    return (
      <div className="login">
        {!this.state.authorized && (
          <React.Fragment>
            <h3 className="login__title">
              Please Login to spotify to use this service
            </h3>
            <p className="login__txt">
              You need a premium subscription for full access.
            </p>
          </React.Fragment>
        )}
        {this.state.authorized && (
          <React.Fragment>
            <p className="login__txt">
              You've successfully logged in. <br /> Click 'Proceed' to continue.
            </p>
          </React.Fragment>
        )}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.handleAuthFlow}
        >
          {this.state.authorized ? 'Proceed' : 'Sign in with Spotify'}
        </button>
      </div>
    );
  }
}

Login.propTypes = {};

export default withRouter(Login);
