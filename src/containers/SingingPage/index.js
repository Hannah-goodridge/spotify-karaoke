/*
 * SingingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Head from '.././../components/Head';
import Player from '.././../components/Player';
//import PropTypes from 'prop-types';

export class SingingPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      authToken: null
    };
  }

  getQueuedTracks() {
    //get tracks from local storage
    localStorage.getItem('tracks');
  }

  render() {
    return (
      <div className="page-container">
        <Head />
        {/* <Nav token={token} /> */}
        <h1>Spotify Karaoke SingingPage</h1>
        <h2>This is the SingingPage</h2>

        <Player />
        <ul>
          <li>play songs in queue</li>
          <li>get the lyrics and show in time with song</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(SingingPage);
