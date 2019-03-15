import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import news from './ducks/news';
import communication from './ducks/communication';

const appReducer = combineReducers({
  news,
  communication,
});

function configureStore() {
  return createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}

export default configureStore();
