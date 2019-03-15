
// Action Types
export const Types = {
  INCREMENT_LOADING_STATUS: 'communication/INCREMENT_LOADING_STATUS',
  DECREMENT_LOADING_STATUS: 'communication/DECREMENT_LOADING_STATUS',
};

// Reducer
const INITIAL_STATE = {
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INCREMENT_LOADING_STATUS:
      return {
        ...state,
        loading: true,
      };
    case Types.DECREMENT_LOADING_STATUS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export const incrementLoadingStatus = () => ({
  type: Types.INCREMENT_LOADING_STATUS,
});

export const decrementLoadingStatus = () => ({
  type: Types.DECREMENT_LOADING_STATUS,
});

export function startLoading() {
  return (dispatch) => {
    dispatch(incrementLoadingStatus());
  };
}

export function finishLoading() {
  return (dispatch) => {
    dispatch(decrementLoadingStatus());
  };
}
