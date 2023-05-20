export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_SUGGESTIONS = "SET_SUGGESTIONS";
export const SET_LOADING = "SET_LOADING";

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});

export const setSuggestions = (suggestions) => ({
  type: SET_SUGGESTIONS,
  payload: suggestions,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

