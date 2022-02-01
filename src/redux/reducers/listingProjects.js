import {
  FETCH_PROJECTS_LISTING_REQUEST,
  FETCH_PROJECTS_LISTING_SUCCESS,
  FETCH_PROJECTS_LISTING_FAILURE,
} from "../types";

const listingReducer = (
  state = {
    data: null,
    error: null,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PROJECTS_LISTING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PROJECTS_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action?.data?.data,
        error: null,
      };
    case FETCH_PROJECTS_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default listingReducer;
