import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Script from 'react-load-script';
export class Head extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  handleScriptLoad = () => {
    return new Promise(resolve => {
      if (window.Spotify) {
        resolve();
      } else {
        window.onSpotifyWebPlaybackSDKReady = resolve;
      }
    });
  };

  render() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${title}`}</title>
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <Script
          url="https://sdk.scdn.co/spotify-player.js"
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
      </React.Fragment>
    );
  }
}

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
