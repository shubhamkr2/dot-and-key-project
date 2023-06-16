import * as actionTypes from "../actionTypes/shipment.actionTypes";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    // Request actions
    case actionTypes.ADD_ADDRESS_REQUEST:
    case actionTypes.GET_ADDRESS_REQUEST:
    case actionTypes.UPDATE_ADDRESS_REQUEST:
    case actionTypes.REMOVE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    // Success actions
    case actionTypes.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.UPDATE_ADDRESS_SUCCESS:
      const updatedAddresses = state.addresses.map((address) =>
        address._id === action.payload._id
          ? { ...address, ...action.payload.newAddress }
          : address
      );
      return {
        ...state,
        addresses: updatedAddresses,
        loading: false,
        error: null,
      };
    case actionTypes.REMOVE_ADDRESS_SUCCESS:
      const filteredAddresses = state.addresses.filter(
        (address) => address._id !== action.payload
      );
      return {
        ...state,
        addresses: filteredAddresses,
        loading: false,
        error: null,
      };
    // Failure actions
    case actionTypes.ADD_ADDRESS_FAILURE:
    case actionTypes.GET_ADDRESS_FAILURE:
    case actionTypes.UPDATE_ADDRESS_FAILURE:
    case actionTypes.REMOVE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Default case
    default:
      return state;
  }
};

export { shipmentReducer };
