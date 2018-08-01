/*
 *
 * ThemeProvider actions
 *
 */

import {
  CHANGE_THEME,
} from './constants';

export function changeTheme(themeType) {
  return {
    type: CHANGE_THEME,
    themeType,
  };
}
