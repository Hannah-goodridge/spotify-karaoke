/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_FLYOUT, TOGGLE_SEARCH, ADDTRACK } from './constants';

export const initialState = fromJS({
  flyoutOpen: false,
  searchOpen: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLYOUT: {
      return state.merge({
        flyoutOpen: !state.toJS().flyoutOpen,
        searchOpen:
          !state.toJS().flyoutOpen === true ? false : state.toJS().searchOpen
      });
    }
    case TOGGLE_SEARCH: {
      return state.merge({
        searchOpen: !state.toJS().searchOpen,
        flyoutOpen:
          !state.toJS().searchOpen === true ? false : state.toJS().flyoutOpen
      });
    }
    case ADDTRACK: {
      return state.merge({
        addTrack: state.toJS().addTrack
      });
    }
    default:
      return state;
  }
}

export default appReducer;
