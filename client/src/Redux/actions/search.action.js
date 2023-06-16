import {
  setSearchValue,
  setSuggestions,
  setLoading,
} from "../actionTypes/search.actionTypes";

let debounceTimeout;

// Fetch search suggestions with debounce
export const fetchSearchSuggestions = (searchValue = "") => {
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
        console.log(searchValue);
        if (searchValue === "") {
          // Fetch all products if search value is empty
          const response = await fetch(
            `https://courageous-rose-nightgown.cyclic.app/products?title=""`
          );
          const suggestions = await response.json();
          dispatch(setSuggestions(suggestions));
        } else {
          // Fetch products matching the search value
          const response = await fetch(
            `https://courageous-rose-nightgown.cyclic.app/products?title=${searchValue}`
          );
          const suggestions = await response.json();
          dispatch(setSuggestions(suggestions));
        }
        dispatch(setLoading(false));
      }, 500); // Debounce for 500 milliseconds
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      dispatch(setLoading(false));
    }
  };
};
