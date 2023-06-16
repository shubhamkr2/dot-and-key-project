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
    // Set search value action
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    // Set suggestions action
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    // Set loading action
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    // Default case
    default:
      return state;
  }
};

export { searchReducer };
