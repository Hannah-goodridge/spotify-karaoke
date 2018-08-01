import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export class Head extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title } = this.props;
    const html = `window.onSpotifyWebPlaybackSDKReady = () => {
        var token = 'BQDF7gqu6eK8nsv7NLKT1B8Po224ScXWjd_evFuM5sRx2rkYM4ruXta9ZEd8C7H7e9kMd-ikV-9TwzKtBeHnAYI62l4poUhhA9oh4UogP7LEua1UDNyci8xuqjPjIqOfeWALsSJ7uoo3DONQ2nyeqAFtsumEh8jVxyLj';
        var player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); }
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });

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
        };`;
    return (
      <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${title}`}</title>
            <meta name="theme-color" content="#000000" />
            <script src="https://sdk.scdn.co/spotify-player.js"></script>
            <script>
                {html}
            </script>
        </Helmet>

      </React.Fragment>
    );
  }
}


Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
