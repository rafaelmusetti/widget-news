import React from 'react';
import { shallow } from 'enzyme';
import NewsListHeader from './NewsListHeader';

describe('<NewsListHeader />', () => {
  describe('When rendering', () => {
    const tree = shallow(
      <NewsListHeader
        onChangeFilter={jest.fn()}
        sources={['test1', 'test2']}
      />,
    );

    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
