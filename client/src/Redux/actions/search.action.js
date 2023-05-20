import { setSearchValue, setSuggestions, setLoading } from "../actionTypes/search.actionTypes";

export const fetchSearchSuggestions = (searchValue) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setSearchValue(searchValue));

      // Perform debouncing here if necessary

      const response = await fetch(`https://courageous-rose-nightgown.cyclic.app/products?title=${searchValue}`);
      const suggestions = await response.json();

      dispatch(setSuggestions(suggestions));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
