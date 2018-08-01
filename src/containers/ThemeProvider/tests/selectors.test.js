import { fromJS } from 'immutable';

import {
  selectTheme,
} from '../selectors';

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = fromJS({
      theme: {
        active: 'default',
      },
    });
    const mockedState = fromJS({
      active: 'default',
    });
    expect(selectTheme(globalState)).toEqual(mockedState);
  });
});
