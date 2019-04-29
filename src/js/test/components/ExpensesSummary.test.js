import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('ExpensesSummary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExpensesSummary total={0} count={0} />);
  });
  test('should render correctly with no expense', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with one expense', () => {
    wrapper.setProps({ total: 100, count: 1 });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with two expenses', () => {
    wrapper.setProps({ total: 150, count: 2 });
    expect(wrapper).toMatchSnapshot();
  });
});
