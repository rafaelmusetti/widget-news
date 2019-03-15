import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  describe('When rendering', () => {
    const tree = shallow(
      <Home />,
    );

    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
