import { setSearchValue, setSuggestions, setLoading } from "../actionTypes/search.actionTypes";

let debounceTimeout;

export const fetchSearchSuggestions = (searchValue) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setSearchValue(searchValue));

      // Clear the previous timeout
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Set a new timeout for debouncing
      debounceTimeout = setTimeout(async () => {
        const response = await fetch(`https://courageous-rose-nightgown.cyclic.app/products?title=${searchValue}`);
        const suggestions = await response.json();
        dispatch(setSuggestions(suggestions));
        dispatch(setLoading(false));
      }, 500); // Debounce for 300 milliseconds
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      dispatch(setLoading(false));
    }
  };
};
