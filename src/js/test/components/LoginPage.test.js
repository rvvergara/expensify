import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('LoginPage', () => {
  test('it should render correctly', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    expect(wrapper).toMatchSnapshot();
  });
});
