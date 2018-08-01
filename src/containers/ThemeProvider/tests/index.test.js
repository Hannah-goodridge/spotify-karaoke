import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import ConnectedThemeProvider, { ThemeProvider } from '../index';
import configureStore from '../../../configureStore';

Enzyme.configure({ adapter: new Adapter() });

describe('<ThemeProvider />', () => {
  it('ThemeProvider should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <ThemeProvider theme={{}}>
        {children}
      </ThemeProvider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

describe('<ConnectedThemeProvider />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('ConnectedThemeProvider should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = mount(
      <Provider store={store}>
        <ConnectedThemeProvider>
          {children}
        </ConnectedThemeProvider>
      </Provider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
