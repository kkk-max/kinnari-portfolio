import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
} from "../types";
import { postApi } from "./api";

export const addProjectRequest = () => ({
  type: ADD_PROJECT_REQUEST,
});

export const addProjectSuccess = (data) => ({
  type: ADD_PROJECT_SUCCESS,
  data: data,
});

export const addProjectFailure = (error) => ({
  type: ADD_PROJECT_FAILURE,
  error,
});

export const fetchAddProject = (data) => (dispatch, getState) => {
  dispatch(addProjectRequest());

  return postApi(`/projects`, data)
    .then((data) => {
      dispatch(addProjectSuccess(data));
      return data?.data?.data ?? data?.data ?? data;
    })
    .catch((error) => {
      dispatch(addProjectFailure(error));
    });
};
