import React from 'react';
import { fromJS } from 'immutable';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { H } from '../index';
import { service } from '../../../tests/commonMocks';

Enzyme.configure({ adapter: new Adapter() });

const mockedProps = fromJS({
  profileLink: '/profileLink',
  service,
  location: {
    pathname: ''
  },
  onToggleFlyout: () => {},
  onToggleSearch: () => {},
  searchOpen: false,
  flyoutOpen: false
});

describe('Header component', () => {
  it('matches the snapshot', () => {
    const html = shallow(<H {...mockedProps.toJS()} />);
    expect(html).toMatchSnapshot();
  });
});
