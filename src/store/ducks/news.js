import { get } from '../../dataSource/requests';
import { startLoading, finishLoading } from './communication';
import { normalize, getSources } from './utils';
import { NEWS_URL } from '../../utils/constants';

// Action Types
export const Types = {
  FETCH_NEWS: 'news/FETCH_NEWS',
  SET_FILTER: 'news/SET_FILTER',
};

// Reducer
const INITIAL_STATE = {
  articles: {
    ids: [],
    content: {},
  },
  sources: [],
  filter: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_NEWS:
      return {
        ...state,
        articles: normalize(action.payload.articles),
        sources: getSources(action.payload.articles),
      };
    case Types.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
}

// Action Creators
export function fetchNews(articles) {
  return {
    type: Types.FETCH_NEWS,
    payload: {
      articles,
    },
  };
}

export function setFilter(filter) {
  return {
    type: Types.SET_FILTER,
    payload: {
      filter,
    },
  };
}

export function setFilterArticles(filter) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      await dispatch(setFilter(filter));
      dispatch(finishLoading());
    } catch (exception) {
      console.error(`actions/news -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}

export function fetchNewsList() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await get({ url: NEWS_URL });
      if (response.status !== 'error') {
        dispatch(fetchNews(response.articles));
        dispatch(finishLoading());
      }
      dispatch(finishLoading());
    } catch (exception) {
      console.error(`actions/news -> ${exception}`);
      dispatch(finishLoading());
    }
  };
}
