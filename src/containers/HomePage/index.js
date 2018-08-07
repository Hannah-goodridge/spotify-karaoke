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
import PropTypes from 'prop-types';
import Page from '.././../components/Page';
import Login from '.././../components/Login';
import PageIntro from '.././../components/PageIntro';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page title={'Spotify Karaoke'}>
        <PageIntro
          title={'Spotify Karaoke'}
          subtitle={`A React App which uses the spotify web api and Genius Api together for Karaoke.`}
        />
        <Login />
      </Page>
    );
  }
}

Login.PropTypes = {
  title: PropTypes.string
};

export default HomePage;
