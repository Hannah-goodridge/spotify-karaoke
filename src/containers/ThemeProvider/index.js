/*
 *
 * ThemeProvider
 *
 * This component connects the redux state theme to the
 * styled components theme / bootstrap
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { makeSelectActiveTheme } from './selectors';

export class ThemeProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledComponentsThemeProvider theme={{}}>
        {React.Children.only(this.props.children)}
      </StyledComponentsThemeProvider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};


const mapStateToProps = (state) => {
  const getActiveTheme = makeSelectActiveTheme();

  return {
    theme: getActiveTheme(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeProvider);
