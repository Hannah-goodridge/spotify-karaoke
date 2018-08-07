/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from '../../containers/HomePage/Loadable';
import LandingPage from '../../containers/LandingPage/Loadable';
import SingingPage from '../../containers/SingingPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

import { toJS } from '../../components/HOC/to-js';

export class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/sing" component={SingingPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

// App.propTypes = {

// };

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapDispatchToProps)(toJS(App)));
