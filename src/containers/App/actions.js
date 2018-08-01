/*
 *
 * App actions
 *
 */

import {
  TOGGLE_SEARCH,
} from './constants';

export function toggleSearch() {
  return {
    type: TOGGLE_SEARCH,
  };
}
