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
import Head from '.././../components/Head';
import Nav from '.././../components/Nav';

//import PropTypes from 'prop-types';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    let url = window.location.href;
    if (url.indexOf("token=") > -1) {
      let authToken = url
        .split("token=")[1]
        .split("&")[0]
        .trim();
      let authorized = true;
      this.setState({ authToken, authorized });
    }
  };



  render() {
    return (
      <div>
        <Head />
        <Nav />
        <h1>Spotify Karaoke Landing LandingPage</h1>
        <h2>This is the landing page</h2>
      </div>
    );
  }
}


export default LandingPage;
