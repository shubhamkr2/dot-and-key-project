import { setSearchValue, setSuggestions, setLoading } from "./actionTypes";
import axios from "axios";

export const fetchSearchSuggestions = (searchValue) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setSearchValue(searchValue));

      // Perform debouncing here if necessary

      const response = await axios.get(`https://courageous-rose-nightgown.cyclic.app/products?title=${searchValue}`);
      const suggestions = response.data;

      dispatch(setSuggestions(suggestions));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
