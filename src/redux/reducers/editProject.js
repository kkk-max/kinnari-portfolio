import {
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
} from "../types";

const editReducer = (
  state = {
    data: null,
    error: null,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case EDIT_PROJECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action?.data?.data,
        error: null,
      };
    case EDIT_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default editReducer;
