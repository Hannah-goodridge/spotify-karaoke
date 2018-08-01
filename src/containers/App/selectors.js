import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

/**
 * Direct selector to the app state domain
 */

const selectApp = (state) => state.get('app');


/**
 * Select the flyout open
 */

const makeSelectFlyoutOpen = createSelector(
  selectApp,
  (appState) => appState.get('flyoutOpen'),
);

/**
 * Select the search open
 */

const makeSelectSearchOpen = createSelector(
  selectApp,
  (appState) => appState.get('searchOpen'),
);

export {
  makeSelectLocation,
  makeSelectFlyoutOpen,
  makeSelectSearchOpen,
};
