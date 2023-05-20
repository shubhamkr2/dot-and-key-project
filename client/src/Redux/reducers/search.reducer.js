import {
  SET_SEARCH_VALUE,
  SET_SUGGESTIONS,
  SET_LOADING,
} from "../actionTypes/search.actionTypes";

const initialState = {
  searchValue: "",
  suggestions: [],
  isLoading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export { searchReducer };
