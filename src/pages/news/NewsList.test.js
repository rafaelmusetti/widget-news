import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import NewsList from './NewsList';

const INITIAL_STATE = {
  news: {
    articles: {
      ids: [],
      content: {},
    },
    sources: {},
    filter: '',
  },
  communication: {
    loading: false,
  },
};

describe('<NewsList />', () => {
  const mockStore = configureStore();
  const store = mockStore(INITIAL_STATE);
  let tree;
  describe('When rendering', () => {
    const onFilterMock = jest.fn();
    const onFetchNewsMock = jest.fn();
    tree = shallow(
      <NewsList
        store={store}
        onSetFilter={onFilterMock}
        onFetchNewsList={onFetchNewsMock}
      />,
    );

    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
