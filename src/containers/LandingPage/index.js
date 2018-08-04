/*
 * LandingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withRouter } from 'react-router';
import Head from '.././../components/Head';
import Nav from '.././../components/Nav';
import Player from '.././../components/Player';
//import PropTypes from 'prop-types';

export class LandingPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      authToken: null
    };
  }

  componentDidMount = () => {
    let url = window.location.href;
    let token = this.props.history.location.state.auth.authToken;
    console.log(token);

    this.setState({ authToken: token });
  };

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    const token = this.state.authToken;

    return (
      <div>
        <Head />
        <Nav token={token} />
        <h1>Spotify Karaoke LandingPage</h1>
        <h2>This is the landing page</h2>
        <Player />
        <ul>
          <li>we need to search/get tracks</li>
          <li>play audio</li>
          <li>get the lyrics</li>
          <li>accept multiple audio input- hard</li>
          <li>web sockets</li>
          <li>stream the audio to a backend</li>
          <li>
            use websockets to push that audio from the BE to your comps FE
          </li>
          <li>need a node server</li>
          <li>you'll need a room key and page for login</li>
          <li>you'll need a singing page</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(LandingPage);
