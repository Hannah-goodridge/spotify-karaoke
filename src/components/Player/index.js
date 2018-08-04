import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { token } from '../../constants';

export class Player extends React.PureComponent {
  state = {
    toggleSearch: false
  };

  componentDidMount() {
    const Spotify = window.Spotify;
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = token;
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchOpen === false && nextProps.searchOpen === true) {
      setTimeout(() => {
        document.querySelector('#Search').focus();
      }, 500);
    }
  }
  toggleSearch() {
    this.setState({
      toggleSearch: !this.state.toggleSearch
    });
  }

  render() {
    const { toggleSearch } = this.state;

    return (
      <React.Fragment>
        <audio src="" controls />
      </React.Fragment>
    );
  }
}

Player.propTypes = {};

export default Player;
