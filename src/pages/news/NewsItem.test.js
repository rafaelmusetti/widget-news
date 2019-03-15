import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from './NewsItem';

describe('<NewsItem />', () => {
  describe('When rendering', () => {
    const tree = shallow(
      <NewsItem
        title="title"
        publishedAt="2019-02-15T14:53:40Z"
        source="source"
        url="url"
      />,
    );

    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
