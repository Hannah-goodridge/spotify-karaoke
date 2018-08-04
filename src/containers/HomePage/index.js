/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Head from '.././../components/Head';

import axios from 'axios';
import {
  spotifyWebApiURL,
  clientID,
  redirectURI,
  clientSecret,
  spotifyProfileURL
} from '../../constants';
//import PropTypes from 'prop-types';

export class HomePage extends React.PureComponent {
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

    console.log(window.MyVars);
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
          console.log(user);
        })
        .then(() =>
          this.props.history.push('/landing', {
            current_user: { user },
            auth: { authToken }
          })
        )
        .catch(error => {
          console.log(error);
          window.location.assign(spotifyWebApiURL);
        });
    } else {
      window.location.assign(spotifyWebApiURL);
    }
  };

  render() {
    return (
      <div>
        <Head />
        <h1>Spotify Karaoke</h1>
        <h2>
          A react app which uses the spotify web api and Genius Api so you can
          sing along to tracks.
        </h2>
        <p>
          {this.state.authorized
            ? 'Successfully authorized! Click below to Enter!'
            : 'Just click the button below to authorize your Spotify account to start using React Spotify!'}
        </p>
        <div className="container">
          {this.state.authorized === false && (
            <h2>Please Login to spotify to use this service</h2>
          )}
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleAuthFlow}
          >
            {this.state.authorized
              ? 'Proceed to Karaoke'
              : 'Sign in with Spotify'}
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
