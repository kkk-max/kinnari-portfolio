import {
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILURE,
  } from "../types";
  
  const addReducer = (
    state = {
      data: null,
      error: null,
      isLoading: false,
    },
    action
  ) => {
    switch (action.type) {
      case ADD_PROJECT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_PROJECT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action?.data?.data,
          error: null,
        };
      case ADD_PROJECT_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default addReducer;
  