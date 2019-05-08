import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('LoginPage', () => {
  let wrapper;
  let startLogin;
  beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
  });
  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('it should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });
});
