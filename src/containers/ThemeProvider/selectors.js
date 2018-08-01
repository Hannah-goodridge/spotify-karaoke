import { createSelector } from 'reselect';

/**
 * Direct selector to the theme state domain
 */
const selectTheme = (state) => state.get('theme');

/**
 * Select the active theme
 */

const makeSelectActiveTheme = () => createSelector(
  selectTheme,
  (themeState) => themeState.get('active')
);

export {
  selectTheme,
  makeSelectActiveTheme,
};
