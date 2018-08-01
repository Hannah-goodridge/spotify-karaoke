/*
 *
 * ThemeProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_THEME,
  DEFAULT_THEME,
} from './constants';

export const initialState = fromJS({
  active: DEFAULT_THEME,
});

function themeProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return state
      .set('active', action.themeType);
    default:
      return state;
  }
}

export default themeProviderReducer;
