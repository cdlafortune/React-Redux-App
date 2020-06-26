const initialState = {
  loading: false,
  fact: "",
  isFetching: false,
  error: ""
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_FACT_START":
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case "FETCHING_FACT_SUCCESS":
      return {
        ...state,
        fact: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
