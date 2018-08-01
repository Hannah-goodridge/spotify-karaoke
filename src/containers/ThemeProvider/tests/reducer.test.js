import { fromJS } from 'immutable';

import themeProviderReducer from '../reducer';
import {
  CHANGE_THEME,
  DEFAULT_THEME,
} from '../constants';

describe('themeProviderReducer', () => {
  it('returns the initial state', () => {
    expect(themeProviderReducer(undefined, {})).toEqual(fromJS({
      active: DEFAULT_THEME,
    }));
  });

  it('changes the theme', () => {
    expect(themeProviderReducer(undefined, { type: CHANGE_THEME, themeType: 'army' }).toJS()).toEqual({
      active: 'army',
    });
  });
});
