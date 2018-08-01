import {
  changeTheme,
} from '../actions';

import {
  CHANGE_THEME,
} from '../constants';

describe('ThemeProvider actions', () => {
  describe('Change Theme Action', () => {
    it('has a type of CHANGE_THEME', () => {
      const expected = {
        type: CHANGE_THEME,
        themeType: 'army',
      };
      expect(changeTheme('army')).toEqual(expected);
    });
  });
});
