import {
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
  } from "../types";
  
  const deleteReducer = (
    state = {
      data: null,
      error: null,
      isLoading: false,
    },
    action
  ) => {
    switch (action.type) {
      case DELETE_PROJECT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case DELETE_PROJECT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action?.data?.data,
          error: null,
        };
      case DELETE_PROJECT_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default deleteReducer;
  